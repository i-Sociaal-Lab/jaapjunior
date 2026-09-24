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
    /wetgeving/i,
    /jeugdwet/i,
    /ministeri[eë]le regeling/i,
    /regeling jeugdwet/i,
    /verplichting tot gebruik van istandaarden/i,
    /(^|[/\\])(?:xsd|schema)/i,
    /basisschema/i,
];

const SUPPLEMENTAL_PATTERNS = [
    /faq/i,
    /veelgestelde-vragen/i,
    /casus/i,
    /sap[-_ ]?gi/i,
];

function buildSourceUrl(code: string): string | null {
    const normalized = code.trim().toLowerCase();

    // Rule codes are treated as one complete code. Never split a code such as
    // OP033X1, OP002X2 or OP090X4 into separate URL path segments. Only the
    // complete code is normalized to lowercase.


    if (/^jw\d{3}$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/berichten/${normalized}/`;
    }
    if (/^wmo\d{3}$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/iwmo/3.2/berichten/${normalized}/`;
    }
    if (/^op\d+[a-z0-9]*$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/${normalized}/`;
    }
    if (/^up\d+[a-z0-9]*$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/${normalized}/`;
    }
    if (/^tr\d+[a-z0-9]*$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/technische-regel/${normalized}/`;
    }
    if (/^cd\d+[a-z0-9]*$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/conditie/${normalized}/`;
    }
    if (/^cs\d+[a-z0-9]*$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/constraint/${normalized}/`;
    }
    if (/^iv\d+[a-z0-9]*$/.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/invulinstructie/${normalized}/`;
    }

    // Codelijsten gebruiken uitsluitend het codelijstnummer in de URL.
    // Bijvoorbeeld WJ756_Eenheid -> /codelijsten/wj756/
    // De naam van de codelijst (zoals "Eenheid") hoort niet in het URL-pad.
    if (/^(?:jz|wj|cod|wmo)\d{3}$/i.test(normalized)) {
        return `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/codelijsten/${normalized}/`;
    }

    return null;
}

function normalizeSourceUrls(content: any): any {
    if (typeof content !== "string") return content;

    // Correct legacy/direct XSD links to the canonical message page.
    content = content.replace(
        /https:\/\/informatiemodel\.istandaarden\.nl\/informatiemodel\/ijw\/3\.2\/xsd\/(jw\d{3})\.xsd\/?/gi,
        (_match: string, code: string) => buildSourceUrl(code) ?? _match,
    );

    // Correct rule URLs with uppercase codes and the obsolete /regels/pad/ form.
    // Correct accidentally split composite rule codes such as /op033/x1/.
    // The complete code must be one path segment: /op033x1/.
    content = content.replace(
        /https:\/\/informatiemodel\.istandaarden\.nl\/informatiemodel\/ijw\/3\.2\/regels\/(uitgangspunt|bedrijfsregel|technische-regel|conditie|constraint|invulinstructie)\/((?:up|op|tr|cd|cs|iv)\d+)\/([a-z]\d+)\/?/gi,
        (_match: string, path: string, prefixNumber: string, suffix: string) => buildSourceUrl(`${prefixNumber}${suffix}`) ?? _match,
    );

    content = content.replace(
        /https:\/\/informatiemodel\.istandaarden\.nl\/informatiemodel\/ijw\/3\.2\/regels\/pad\/(up|op|tr|cd|cs|iv)(\d+[a-z0-9]*)\/?/gi,
        (_match: string, type: string, number: string) => buildSourceUrl(`${type}${number}`) ?? _match,
    );

    content = content.replace(
        /https:\/\/informatiemodel\.istandaarden\.nl\/informatiemodel\/ijw\/3\.2\/regels\/(uitgangspunt|bedrijfsregel|technische-regel|conditie|constraint|invulinstructie)\/((?:up|op|tr|cd|cs|iv)\d+[a-z0-9]*)\/?/gi,
        (_match: string, _path: string, code: string) => buildSourceUrl(code) ?? _match,
    );

    // Codelijsten hebben één canonieke URL op basis van alleen het
    // codelijstnummer. Corrigeer eventuele detailpaden zoals
    // /codelijsten/wj756/eenheid/ naar /codelijsten/wj756/.
    content = content.replace(
        /https:\/\/informatiemodel\.istandaarden\.nl\/informatiemodel\/ijw\/3\.2\/codelijsten\/((?:jz|wj|cod|wmo)\d{3})(?:\/[^\s)]+)?\/?/gi,
        (_match: string, code: string) => buildSourceUrl(code) ?? _match,
    );

    return content;
}

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

    private nodeContent(node: any): string {
        return typeof node?.getContent === "function"
            ? node.getContent(MetadataMode.ALL)
            : String(node ?? "");
    }

    private codelistIdentifier(value: string): string | null {
        const match = String(value ?? "").match(/\b(?:JZ|WJ|COD|WMO)\d{3}\b/i);
        return match ? match[0].toUpperCase() : null;
    }

    private codelistContainsExactCode(content: string, code: string): boolean {
        const escaped = code.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (!escaped) return false;

        // Codelijsten in de kennisbank zijn markdown-tabellen. Een code moet
        // als zelfstandige cel/waarde voorkomen; een toevallig getal in een
        // toelichting telt niet als bewijs dat de code bestaat.
        const rowCode = new RegExp(`(?:^|\\n)\\s*\\|\\s*${escaped}\\s*\\|`, "i");
        const listCode = new RegExp(`(?:^|\\n)\\s*(?:[-*]\\s*)?${escaped}(?:\\s|[-–:]|$)`, "i");
        return rowCode.test(content) || listCode.test(content);
    }

    /**
     * Valideert een concrete code eerst in de relevante broncodelijst.
     * Dit geldt voor alle codelijstvragen en voorkomt dat een code uit een
     * andere codelijst als bewijs of als vervanging wordt gebruikt.
     * Bij relatievragen wordt eerst de broncodelijst gevalideerd; pas daarna
     * mag de relatie met een andere codelijst worden onderzocht.
     */
    private sourceCodelistIdentifiers(analysis: QuestionAnalysis): string[] {
        const refs = (analysis.codelijsten ?? [])
            .map((value) => ({ value, id: this.codelistIdentifier(value) }))
            .filter((item): item is { value: string; id: string } => Boolean(item.id));

        if (refs.length === 0) return [];
        if (refs.length === 1) return [refs[0].id];

        const question = analysis.vraag.toLowerCase();

        // Bij een relatievraag is de codelijst die de gebruiker als bron van
        // de opgegeven code noemt de primaire validatiebron. Bijvoorbeeld:
        // "reden beëindiging 13" -> JZ588; pas daarna mag JZ002 worden geraadpleegd.
        const conceptPriority: Array<[RegExp, string]> = [
            [/reden\s+(?:van\s+)?be[eë]indiging/i, "JZ588"],
            [/reden\s+wijziging\s+toewijzing/i, "JZ002"],
        ];

        for (const [pattern, id] of conceptPriority) {
            if (pattern.test(question) && refs.some((ref) => ref.id === id)) return [id];
        }

        // Vragen zoals "welke X hoort bij Y" gebruiken de eerste expliciet
        // genoemde codelijst als broncode, tenzij de prompt een specifiekere
        // bronrichting heeft aangegeven.
        return [refs[0].id];
    }

    private async validateCodelistSourceCodes(
        analysis: QuestionAnalysis,
    ): Promise<{ invalid: boolean; message?: string }> {
        // Elke concrete code uit een expliciet/herkenbaar genoemde codelijst
        // moet eerst worden gevalideerd. Dit geldt niet alleen voor
        // relatievragen, maar ook voor vragen naar de betekenis, toepassing
        // of andere eigenschappen van een code.
        if (!analysis.codelijsten?.length || !analysis.codes?.length) {
            return { invalid: false };
        }

        const sourceCodelists = this.sourceCodelistIdentifiers(analysis);
        if (sourceCodelists.length === 0) return { invalid: false };

        for (const codelistId of sourceCodelists) {
            const codes = [...new Set(analysis.codes.map((code) => String(code).trim()).filter(Boolean))];
            if (codes.length === 0) continue;

            const queries = [
                codelistId,
                ...codes.map((code) => `${codelistId} code ${code}`),
            ];

            const retriever = this.createRetriever(queries, 100);
            const results = (await retriever.retrieve()).filter((result: any) => {
                const content = this.nodeContent(result.node);
                return sourceTier(result.node) === "formal" && content.toUpperCase().includes(codelistId);
            });

            // Alleen een daadwerkelijk gevonden codelijst kan een negatieve
            // validatie opleveren. Bij onvoldoende bronmateriaal blijft de
            // normale retrieval intact; we gokken dus nooit dat een code niet bestaat.
            if (results.length === 0) continue;

            for (const code of codes) {
                const exists = results.some((result: any) =>
                    this.codelistContainsExactCode(this.nodeContent(result.node), code),
                );

                if (!exists) {
                    return {
                        invalid: true,
                        message:
                            `Formele codevalidatie: code ${code} is niet gevonden in codelijst ${codelistId}. ` +
                            `Beantwoord de gebruikersvraag daarom uitsluitend met de mededeling dat deze code niet bestaat in ${codelistId}. ` +
                            `Zoek deze code NIET op in een andere codelijst en leid geen relatie af op basis van hetzelfde nummer. ` +
                            `Vraag de gebruiker eventueel om een andere code te noemen.`,
                    };
                }
            }
        }

        return { invalid: false };
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
    /**
     * Exacte retrieval voor vragen naar één concrete code.
     *
     * Vector search mag hier alleen kandidaat-chunks leveren. De uiteindelijke
     * selectie gebeurt op een exacte codewaarde in de bron. Daardoor kan een
     * semantisch vergelijkbare gemeenteregel niet worden gebruikt voor een
     * vraag naar bijvoorbeeld gemeentecode 1952.
     */
    private async retrieveExactCode(
        question: string,
        searchQueries: string[],
        analysis?: QuestionAnalysis,
    ) {
        const analysisCodes = (analysis?.codes ?? [])
            .map((code) => String(code).trim())
            .filter(Boolean);

        // Als de Vragen Agent de code niet heeft geëxtraheerd, herken dan
        // alleen een concrete code wanneer de vraag duidelijk om een code
        // vraagt. Zo wordt een jaartal niet automatisch als code behandeld.
        const explicitCodeMatches = question.match(
            /\b(?:code\s+)?(\d{1,6})\b/gi,
        ) ?? [];
        const questionCodes = explicitCodeMatches
            .map((value) => value.match(/\d{1,6}/)?.[0] ?? "")
            .filter(Boolean);

        const codes = [...new Set([...analysisCodes, ...questionCodes])];
        if (codes.length === 0) return [];

        const asksForCodeMeaning =
            /welke\s+(?:gemeente|naam|omschrijving|betekenis)|wat\s+(?:is|betekent)|betekenis|omschrijving|naam|hoort\s+bij|code\s+\d/i.test(question) ||
            (analysis?.vraagtype ?? []).some((x) => /codebetekenis/i.test(x));

        if (!asksForCodeMeaning) return [];

        const codelistValues = analysis?.codelijsten ?? [];
        const codelistHints = codelistValues.join(" ");
        const queries = new Set<string>();
        for (const code of codes) {
            queries.add(code);
            queries.add(`code ${code}`);
            if (codelistHints) queries.add(`${codelistHints} code ${code}`);
            if (/gemeente|gemeentecode|cbs/i.test(question + " " + codelistHints)) {
                queries.add(`gemeentecode ${code}`);
                queries.add(`CBS gemeentecode ${code}`);
            }
        }

        // De vectorzoeker levert alleen kandidaten. Met een hoge top-K is de
        // kans groot dat de chunk met de exacte rij wordt meegenomen; daarna
        // filteren we deterministisch op de code zelf.
        const retriever = this.createRetriever([...queries, ...searchQueries], 100);
        const candidates = await retriever.retrieve();

        const exactResults = candidates.filter((result: any) => {
            const content = this.nodeContent(result.node);
            return codes.some((code) => this.codelistContainsExactCode(content, code));
        });

        if (exactResults.length === 0) return [];

        // Wanneer een codelijst expliciet bekend is, geef voorkeur aan chunks
        // waarin die codelijst ook daadwerkelijk wordt genoemd. Voor CBS-
        // gemeentecodes is de exacte tabelrij zelf voldoende bewijs.
        const preferred = exactResults.filter((result: any) => {
            if (!codelistHints) return true;
            const content = this.nodeContent(result.node).toLowerCase();
            return codelistValues.some((value) =>
                content.includes(String(value).toLowerCase()),
            );
        });

        return preferred.length > 0 ? preferred : exactResults;
    }

    private async retrieveCompleteCodelist(
        question: string,
        searchQueries: string[],
        analysis?: QuestionAnalysis,
    ) {
        const ids = new Set<string>();

        for (const value of analysis?.codelijsten ?? []) {
            const id = this.codelistIdentifier(value);
            if (id) ids.add(id);
        }

        // Herken ook natuurlijke taal wanneer de Vragen Agent het nummer niet
        // expliciet heeft teruggegeven. Dit zijn alleen deterministische
        // synoniemen; er worden geen nieuwe codes of codelijsten verzonnen.
        const normalizedQuestion = question.toLowerCase();
        if (/stopredenen|reden(?:en)?\s+(?:van\s+)?be[eë]indiging|reden(?:en)?\s+beeindiging/.test(normalizedQuestion)) {
            ids.add("JZ588");
        }
        if (/reden(?:en)?\s+wijziging\s+toewijzing/.test(normalizedQuestion)) {
            ids.add("JZ002");
        }

        const idList = [...ids];
        const queries = new Set<string>([
            question,
            ...searchQueries,
            ...idList.flatMap((id) => [
                id,
                `${id} alle codes`,
                `${id} code betekenis`,
                `${id} code omschrijving`,
                `${id} waarden`,
                `${id} volledige codelijst`,
            ]),
        ]);

        const retriever = this.createRetriever([...queries], 100);
        const results = await retriever.retrieve();

        // Behoud alle relevante codelijst-chunks. Een codelijst kan over
        // meerdere chunks zijn verdeeld; daarom mag uitsluitend op een chunk
        // met de titel/metadata van de codelijst worden gefilterd.
        const scored = results.map((result: any, index: number) => {
            const content = this.nodeContent(result.node);
            const upper = content.toUpperCase();
            const idHits = idList.reduce(
                (count, id) => count + (upper.includes(id) ? 1 : 0),
                0,
            );
            const codeTableHits = (content.match(/(?:^|\n)\s*\|\s*[^|\n]+\s*\|/g) ?? []).length;
            const meaningHits = (content.match(/\b(?:betekenis|omschrijving|toelichting|code)\b/gi) ?? []).length;
            const tierBonus = sourceTier(result.node) === "formal" ? 100 : 0;

            return {
                result,
                index,
                priority: tierBonus + idHits * 1000 + Math.min(codeTableHits, 20) * 20 + Math.min(meaningHits, 10),
            };
        });

        scored.sort((a, b) => {
            if (b.priority !== a.priority) return b.priority - a.priority;
            return a.index - b.index;
        });

        // Geef voldoende ruimte aan een volledige codelijst, maar voorkom dat
        // honderden irrelevante chunks het antwoordcontext vullen.
        return scored.slice(0, 100).map((item) => item.result);
    }

    private async retrieveFormalFirst(
        question: string,
        searchQueries: string[],
        options: { exactMessageCodes?: string[]; ruleOverview?: boolean } = {},
    ) {
        const exactMessageCodes = options.exactMessageCodes ?? [];

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

        // Wettelijke/verplichtingsvragen moeten expliciet in de formele
        // wetgevingsbronnen worden gezocht.
        if (
            /iStandaa?rden|berichtenverkeer|zorgaanbieders|zorgverleners|aanbieders/i.test(question)
            && /verplicht|verplichting|wettelijk|wetgeving|ministeri[eë]le regeling/i.test(question)
        ) {
            formalQuerySet.add(`${question} wetgeving`);
            formalQuerySet.add(`${question} Jeugdwet`);
            formalQuerySet.add(`${question} ministeriële regeling`);
            formalQuerySet.add(`gebruik iStandaarden verplicht wetgeving`);
            formalQuerySet.add(`verplichting tot gebruik van iStandaarden`);
            formalQuerySet.add(`gebruik berichtenverkeer verplicht wetgeving`);
            formalQuerySet.add(`aanbieders zorgverleners berichtenverkeer verplicht`);
        }

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
        let codelistValidationMessage: string | undefined;

        if (analysis) {
            const validation = await this.validateCodelistSourceCodes(analysis);
            if (validation.invalid) {
                codelistValidationMessage = validation.message;
                console.log("===== CODELIJST VALIDATIE =====");
                console.log(codelistValidationMessage);
            }
        }

        if (codelistValidationMessage) {
            retrievedNodes = [{
                node: {
                    getContent: () => codelistValidationMessage,
                },
                score: 1,
            }];
        } else if (
            analysis &&
            !isCompleteList &&
            (analysis.codes?.length || /\b(?:code\s+)?\d{1,6}\b/i.test(q))
        ) {
            // Een concrete codevraag krijgt voorrang boven normale semantische
            // retrieval. Alleen exact gevonden codewaarden mogen als context
            // voor het antwoord worden gebruikt.
            const exactCodeResults = await this.retrieveExactCode(q, searchQueries, analysis);
            if (exactCodeResults.length > 0) {
                retrievedNodes = exactCodeResults;
                console.log("===== EXACTE CODE RETRIEVAL =====");
                console.log(`gevonden exacte code-chunks: ${retrievedNodes.length}`);
            } else {
                const retriever = this.createRetriever(
                    searchQueries,
                    isRuleOverview ? 100 : 20,
                    { exactMessageCodes, ruleOverview: isRuleOverview },
                );
                retrievedNodes = await retriever.retrieve();
                console.log("===== EXACTE CODE RETRIEVAL =====");
                console.log("geen exacte code-chunk gevonden; normale retrieval gebruikt");
            }
        } else if (isCompleteList) {
            // Een volledige codelijst vraagt om andere retrieval dan een
            // gewone vraag. Zoek breed en gericht naar de daadwerkelijke
            // codewaarden; een metadata-chunk alleen mag niet volstaan.
            retrievedNodes = await this.retrieveCompleteCodelist(q, searchQueries, analysis);
            console.log("===== VOLLEDIGE CODELIJST =====");
            console.log(`gevonden chunks: ${retrievedNodes.length}`);
        } else if (isFormalFirst) {
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

        const effectivePrompt = codelistValidationMessage
            ? `${this.prompt}\n\n### HARDE CODELIJSTVALIDATIE\n${codelistValidationMessage}\nGeef geen gekoppelde code uit een andere codelijst. Beantwoord alleen dat de opgegeven broncode niet bestaat en vraag zo nodig om een andere code.`
            : this.prompt;

        const chatEngine = new ContextChatEngine({
            retriever: {
                async retrieve() {
                    return retrievedNodes;
                },
            } as any,
            nodePostprocessors,
            systemPrompt: effectivePrompt,
            chatModel: llm,
        });

        const startTime = Date.now();
        const response = await chatEngine.chat({ message: q, chatHistory });
        const responseAny = response as any;
        if (typeof responseAny?.message?.content === "string") {
            responseAny.message.content = normalizeSourceUrls(responseAny.message.content);
        }
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
