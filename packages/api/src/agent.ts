import { Anthropic } from "@llamaindex/anthropic";
import { QdrantVectorStore } from "@llamaindex/qdrant";
import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
    type ChatMessage,
    ContextChatEngine,
    MetadataMode,
    type LLM,
    Settings,
    storageContextFromDefaults,
    VectorStoreIndex,
} from "llamaindex";
import type { IDB } from "./api.js";
import { getEnvOrThrow } from "./get-env.js";
import { Openrouter } from "./openrouter.js";
import { VragenAgent, type QuestionAnalysis } from "./vragen-agent.js";

Settings.embedModel = new OpenAIEmbedding({ model: "text-embedding-ada-002" });
Settings.chunkOverlap = 100;

const qdrantUri = getEnvOrThrow("QDRANT_URI");
const jinaApiKey = getEnvOrThrow("JINAAI_API_KEY");

function getQdrantConfig(uri: string) {
    if (uri.includes("localhost") || uri.includes("127.0.0.1")) return { url: uri };
    const urlWithoutPort = uri.replace(/:6333$/, "");
    if (uri.includes(".internal.") || uri.includes(".azurecontainerapps.io")) return { url: urlWithoutPort };
    return { url: uri };
}

function createJinaReranker(topN: number, model: string) {
    return {
        async postprocessNodes(nodes: any[], query: any) {
            if (nodes.length === 0) return [];
            if (query === undefined) throw new Error("Reranker requires a query");
            const queryText = typeof query === "string" ? query : (query?.query ?? String(query));
            const documents = nodes.map((n: any) => n.node.getContent(MetadataMode.ALL));
            const response = await fetch("https://api.jina.ai/v1/rerank", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${jinaApiKey}` },
                body: JSON.stringify({ model, query: queryText, documents, top_n: topN }),
            });
            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Jina rerank failed: ${response.status} ${errText}`);
            }
            const json = await response.json() as { results: Array<{ index: number; relevance_score: number }> };
            return json.results.map((r) => ({ node: nodes[r.index].node, score: r.relevance_score }));
        },
    };
}

async function createIndex(collectionName: string, dataDir = "./jw") {
    const qdrantConfig = getQdrantConfig(qdrantUri);
    const vectorStore = new QdrantVectorStore({ collectionName, ...qdrantConfig });
    const storageContext = await storageContextFromDefaults({ vectorStore });
    const reader = new SimpleDirectoryReader();
    const docs = await reader.loadData(dataDir);
    return VectorStoreIndex.fromDocuments(docs, { storageContext });
}

export const llms = {
    "4.1": () => new OpenAI({ model: "gpt-4.1", temperature: 0.2 }),
    qwen3: () => new Openrouter({ model: "qwen/qwen3-235b-a22b-2507", temperature: 0.2, maxTokens: 100000, additionalChatOptions: { provider: { sort: "throughput" } } }),
    "haiku-4.5": () => new Anthropic({ model: "claude-haiku-4-5-20251001", temperature: 0.2 }),
} satisfies Record<string, () => LLM>;

interface AgentConfig {
    collectionName: string;
    dataPath: string;
    promptPath: string;
    model: keyof typeof llms;
    questionPromptPath?: string;
}

type SourceTier = "formal" | "supplemental";

const FORMAL_PATTERNS = [
    /(?:^|[/\\\s#:_-])(?:op|up|tr|cd|cs|iv)\d{3}[a-z0-9_-]*(?:\.md)?(?:$|[/\\\s:)]|[-–])/i,
    /(?:^|[/\\\s#:_-])(?:op|up|tr)\d+[a-z0-9_-]*\.md$/i,
    /invulinstructie/i,
    /condit/i,
    /constraint/i,
    /codelijst/i,
    /(^|[/\\])(?:xsd|schema)/i,
    /basisschema/i,
];

const SUPPLEMENTAL_PATTERNS = [
    /faq/i,
    /veelgestelde-vragen/i,
    /casus/i,
    /sap[-_ ]?gi/i,
];

function sourceTier(node: any): SourceTier | "unknown" {
    const metadata = node?.metadata ?? {};
    const text = [
        metadata.file_name,
        metadata.filename,
        metadata.file_path,
        metadata.source,
        metadata.url,
        metadata.title,
        typeof node?.getContent === "function" ? node.getContent(MetadataMode.ALL) : "",
    ].filter(Boolean).join(" ");

    if (SUPPLEMENTAL_PATTERNS.some((p) => p.test(text))) return "supplemental";
    if (FORMAL_PATTERNS.some((p) => p.test(text))) return "formal";
    return "unknown";
}

class Agent {
    private constructor(public index: VectorStoreIndex, public model: keyof typeof llms, public prompt: string, private readonly vragenAgent?: VragenAgent) {}

    static async fromConfig(config: AgentConfig) {
        const index = await createIndex(config.collectionName, config.dataPath);
        const prompt = await Bun.file(config.promptPath).text();
        let vragenAgent: VragenAgent | undefined;
        if (config.questionPromptPath) {
            const questionPrompt = await Bun.file(config.questionPromptPath).text();
            vragenAgent = new VragenAgent(llms["4.1"](), questionPrompt);
        }
        return new Agent(index, config.model, prompt, vragenAgent);
    }

    private createRetriever(
        searchQueries: string[],
        similarityTopK = 20,
        options: { exactMessageCodes?: string[]; ruleOverview?: boolean } = {},
    ) {
        const baseRetriever = this.index.asRetriever({ similarityTopK });
        const exactMessageCodes = options.exactMessageCodes ?? [];
        const ruleOverview = options.ruleOverview ?? false;

        return {
            async retrieve() {
                const allResults: any[] = [];
                const seen = new Set<string>();

                for (const searchQuery of searchQueries) {
                    const results = await baseRetriever.retrieve(searchQuery);

                    for (const result of results) {
                        const node = result.node;
                        const key =
                            typeof node?.getContent === "function"
                                ? node.getContent(MetadataMode.ALL)
                                : String(node);

                        if (!seen.has(key)) {
                            seen.add(key);
                            allResults.push(result);
                        }
                    }
                }

                if (!ruleOverview || exactMessageCodes.length === 0) {
                    return allResults;
                }

                const scored = allResults.map((result, index) => {
                    const node = result.node;
                    const content =
                        typeof node?.getContent === "function"
                            ? node.getContent(MetadataMode.ALL)
                            : String(node);

                    const upper = content.toUpperCase();
                    const exactHits = exactMessageCodes.reduce(
                        (count, code) => count + (upper.includes(code.toUpperCase()) ? 1 : 0),
                        0,
                    );

                    return {
                        result,
                        index,
                        priority: exactHits * 1000 + (Number(result.score) || 0),
                    };
                });

                scored.sort((a, b) => {
                    if (b.priority !== a.priority) return b.priority - a.priority;
                    return a.index - b.index;
                });

                return scored.slice(0, 80).map((item) => item.result);
            },
        };
    }

    /**
     * Formele bronretrieval voor regel- en correctievragen.
     *
     * Belangrijk: FAQ/casus/SAP-GI zitten hier bewust nog niet in.
     * Eerst wordt uitsluitend gezocht naar formele bronnen. Pas wanneer
     * die formele kandidaatset onvoldoende is, wordt de aanvullende set
     * toegevoegd. Hierdoor kan een FAQ niet toevallig de formele bron
     * verdringen tijdens de eerste retrieval/reranking.
     */
    private async retrieveFormalFirst(
        question: string,
        searchQueries: string[],
        options: { exactMessageCodes?: string[]; ruleOverview?: boolean } = {},
    ) {
        const formalQuerySet = new Set<string>([
            ...searchQueries,
            `${question} formele regel`,
            `${question} invulinstructie`,
            `${question} bedrijfsregel`,
            `${question} technische regel`,
            `${question} voorwaarde`,
            `${question} toegestaan`,
            `${question} verplicht`,
        ]);

        // Bij een vraag over een afhankelijkheid tussen berichttypen moet de
        // combinatie van de berichtcodes expliciet worden gezocht. Dit is
        // belangrijk voor vragen zoals: "moet JW305 eerst voordat JW323 mag?"
        if (exactMessageCodes.length >= 2) {
            const codes = [...new Set(exactMessageCodes)];
            formalQuerySet.add(codes.join(" "));
            formalQuerySet.add(`${codes.join(" ")} voorwaarde`);
            formalQuerySet.add(`${codes.join(" ")} declaratie`);
            formalQuerySet.add(`${codes.join(" ")} toegestaan`);
            formalQuerySet.add(`${codes.join(" ")} verplicht`);
            formalQuerySet.add(`${codes.join(" ")} goedkeuren afkeuren`);
            formalQuerySet.add(`startbericht als voorwaarde declaratie`);
            formalQuerySet.add(`start- of stopbericht voorwaarde declaratie`);
            formalQuerySet.add(`declaratie niet afhankelijk startbericht`);
        }

        const formalQueries = [...formalQuerySet];

        const retriever = this.createRetriever(
            formalQueries,
            options.ruleOverview ? 100 : 30,
            options,
        );

        const results = await retriever.retrieve();
        return results.filter((r: any) => sourceTier(r.node) === "formal");
    }

    private async retrieveSupplemental(
        question: string,
        searchQueries: string[],
    ) {
        const supplementalQueries = [...new Set([
            question,
            ...searchQueries,
            `${question} FAQ`,
            `${question} casus`,
            `${question} SAP GI`,
        ])];

        const retriever = this.createRetriever(supplementalQueries, 20);
        const results = await retriever.retrieve();
        return results.filter((r: any) => sourceTier(r.node) === "supplemental");
    }

    private async formalSourcesAreSufficient(
        question: string,
        formalResults: any[],
        llm: LLM,
    ): Promise<boolean> {
        if (formalResults.length === 0) return false;

        const context = formalResults
            .slice(0, 20)
            .map((r, i) => `BRON ${i + 1}:\n${r.node.getContent(MetadataMode.ALL)}`)
            .join("\n\n---\n\n");

        const response = await llm.chat({
            messages: [
                {
                    role: "system",
                    content:
                        `Beoordeel uitsluitend of de formele bronnen de gebruikersvraag volledig en concreet beantwoorden.
` +
                        `Geef uitsluitend JSON terug: {"voldoende":true} of {"voldoende":false}.
` +
                        `Een bron is voldoende als de vraag inhoudelijk kan worden beantwoord zonder FAQ, casus of SAP-GI.
` +
                        `Als een aanvullende bron alleen hetzelfde antwoord herhaalt, is de formele bronset voldoende.
` +
                        `Bij twijfel: false.`,
                },
                {
                    role: "user",
                    content: `VRAAG:\n${question}\n\nFORMELE BRONNEN:\n${context}`,
                },
            ],
        });

        const content = String(response.message.content).trim();
        const match = content.match(/\{[\s\S]*\}/);
        if (!match) return false;

        try {
            return Boolean(JSON.parse(match[0]).voldoende);
        } catch {
            return false;
        }
    }

    async query(q: string, chatHistory: ChatMessage[], db: IDB, model?: keyof typeof llms) {
        const actualModel = model || this.model;
        let searchQueries: string[] = [q];
        let analysis: QuestionAnalysis | undefined;

        if (this.vragenAgent) {
            analysis = await this.vragenAgent.analyze(q, chatHistory);
            const additionalQueries = analysis.zoekopdrachten
                .filter((x: string) => x.trim().length > 0)
                .map((x: string) => x.trim());
            searchQueries = [q, ...additionalQueries];
            console.log("===== VRAGEN AGENT =====");
            console.dir(analysis, { depth: null });
            console.log("===== RETRIEVAL QUERIES =====");
            console.dir(searchQueries, { depth: null });
        }

        const isRuleOverview = analysis?.zoekstrategie === "rule_overview";
        const isCompleteList = analysis?.zoekstrategie === "complete_list";
        const isFormalFirst = ["rule", "rule_overview", "relational", "process"].includes(
            analysis?.zoekstrategie ?? "",
        ) || analysis?.vraagtype?.some((x) =>
            /regel|correctie|invulinstructie|voorwaarde|verplicht/i.test(x),
        );

        const exactMessageCodes = [
            ...(analysis?.berichttypen ?? []),
            ...searchQueries.flatMap((query) => query.match(/\b(?:JW|WMO)\d{3}\b/gi) ?? []),
        ]
            .map((code) => code.toUpperCase())
            .filter((code, index, arr) => arr.indexOf(code) === index);

        const llm = llms[actualModel]();
        let retrievedNodes: any[];

        if (isFormalFirst) {
            const formalResults = await this.retrieveFormalFirst(q, searchQueries, {
                exactMessageCodes,
                ruleOverview: isRuleOverview,
            });

            const formalEnough = await this.formalSourcesAreSufficient(q, formalResults, llm);

            console.log("===== FORMELE BRONNEN =====");
            console.log(`gevonden: ${formalResults.length}`);
            console.log(`voldoende: ${formalEnough}`);

            if (formalEnough) {
                retrievedNodes = formalResults;
            } else {
                const supplementalResults = await this.retrieveSupplemental(q, searchQueries);
                retrievedNodes = [...formalResults, ...supplementalResults];
                console.log(`aanvullende bronnen: ${supplementalResults.length}`);
            }
        } else {
            const retriever = this.createRetriever(
                searchQueries,
                isRuleOverview ? 100 : 20,
                { exactMessageCodes, ruleOverview: isRuleOverview },
            );
            retrievedNodes = await retriever.retrieve();
        }

        const nodePostprocessors =
            (isRuleOverview || isCompleteList || isFormalFirst)
                ? []
                : [createJinaReranker(10, "jina-reranker-v2-base-multilingual") as any];

        const chatEngine = new ContextChatEngine({
            retriever: {
                async retrieve() {
                    return retrievedNodes;
                },
            } as any,
            nodePostprocessors,
            systemPrompt: this.prompt,
            chatModel: llm,
        });

        const startTime = Date.now();
        const response = await chatEngine.chat({ message: q, chatHistory });
        const responseTime = Date.now() - startTime;

        db.prepare("INSERT INTO model_responses (model, response_time) VALUES ($1, $2)").run({
            $1: actualModel,
            $2: responseTime,
        });
        response.message.options ??= {};
        // @ts-expect-error
        response.message.options.model = actualModel;
        // @ts-expect-error
        response.message.options.prompt = this.prompt;
        return response;
    }
}

const agentConfigs = {
    jw: { collectionName: "jaapjunior", dataPath: "./jw/bronnen", promptPath: "./jw/prompt.md", questionPromptPath: "./jw/vragen-agent.md", model: "4.1" as keyof typeof llms },
    wmo: { collectionName: "wmo", dataPath: "./wmo/bronnen", promptPath: "./wmo/prompt.md", model: "4.1" as keyof typeof llms },
    "cs-wmo": { collectionName: "cs-wmo", dataPath: "./cs-wmo/bronnen", promptPath: "./cs-wmo/prompt.md", model: "haiku-4.5" as keyof typeof llms },
} satisfies Record<string, AgentConfig>;

const agentCache: Partial<Record<keyof typeof agentConfigs, Promise<Agent>>> = {};
async function getAgent(name: keyof typeof agentConfigs): Promise<Agent> {
    if (!agentCache[name]) agentCache[name] = Agent.fromConfig(agentConfigs[name]);
    return agentCache[name]!;
}

export const agents = {
    jw: () => getAgent("jw"),
    wmo: () => getAgent("wmo"),
    "cs-wmo": () => getAgent("cs-wmo"),
};
