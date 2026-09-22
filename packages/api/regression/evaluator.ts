import { llms } from "../src/agent.js";

export type RegressionStatus = "PASS" | "REVIEW" | "FAIL";

export interface RegressionCase {
    id: string;
    question: string;
    expected_sources?: string[];
    forbidden_sources?: string[];
    required_facts?: string[];
    status?: RegressionStatus;
    notes?: string;
}

export interface Evaluation {
    id: string;
    status: RegressionStatus;
    score: number;
    source_score: number;
    fact_score: number;
    found_sources: string[];
    missing_sources: string[];
    forbidden_sources_found: string[];
    missing_facts: string[];
    notes: string[];
}

interface LlmEvaluation {
    facts_ok: boolean;
    missing_facts: string[];
    source_assessment: Array<{
        source: string;
        present: boolean;
    }>;
    factual_errors: string[];
    notes: string[];
}

/**
 * Evaluator voor de JaapJunior-regressieset.
 *
 * Belangrijk:
 * - de oude status uit testset.json wordt NIET als verwachting gebruikt;
 * - expected_sources en required_facts zijn de inhoudelijke golden criteria;
 * - eerst worden bronnen deterministisch herkend;
 * - daarna beoordeelt GPT-4.1 de required_facts en mogelijke feitelijke fouten;
 * - een ontbrekende verplichte bron of een ontbrekend vereist feit leidt niet
 *   automatisch tot FAIL als de LLM kan onderbouwen dat de bron niet nodig is;
 *   zulke gevallen worden REVIEW. Zo voorkomen we dat URL-/bronvermelding
 *   alleen de inhoudelijke beoordeling domineert.
 */

function normalize(value: string): string {
    return value
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function containsCode(text: string, code: string): boolean {
    const pattern = new RegExp(`\\b${code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    return pattern.test(text);
}

function findSources(answer: string, expectedSources: string[]): string[] {
    return expectedSources.filter((source) => containsCode(answer, source));
}

function findForbiddenSources(answer: string, forbiddenSources: string[]): string[] {
    return forbiddenSources.filter((source) => containsCode(answer, source));
}

function parseJsonObject(content: string): LlmEvaluation {
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error(`Evaluator returned no JSON: ${content}`);

    const parsed = JSON.parse(match[0]) as Partial<LlmEvaluation>;
    return {
        facts_ok: Boolean(parsed.facts_ok),
        missing_facts: Array.isArray(parsed.missing_facts) ? parsed.missing_facts.map(String) : [],
        source_assessment: Array.isArray(parsed.source_assessment)
            ? parsed.source_assessment.map((item) => ({
                source: String(item.source),
                present: Boolean(item.present),
            }))
            : [],
        factual_errors: Array.isArray(parsed.factual_errors) ? parsed.factual_errors.map(String) : [],
        notes: Array.isArray(parsed.notes) ? parsed.notes.map(String) : [],
    };
}

async function llmEvaluate(test: RegressionCase, answer: string): Promise<LlmEvaluation> {
    const llm = llms["4.1"]();

    const expectedFacts = (test.required_facts ?? []).map((fact, index) => `${index + 1}. ${fact}`).join("\n");
    const expectedSources = (test.expected_sources ?? []).join(", ") || "(geen verplichte bronnen)";

    const response = await llm.chat({
        messages: [
            {
                role: "system",
                content: `Je bent de evaluator van een regressietest voor JaapJunior, een kennisbankchatbot voor iJw 3.2.

Beoordeel uitsluitend of het gegeven antwoord de vraag inhoudelijk correct beantwoordt ten opzichte van de expliciet opgegeven required_facts en expected_sources.

Belangrijke regels:
- Gebruik geen algemene wereldkennis om ontbrekende feiten aan te vullen.
- Een required_fact is alleen aanwezig als het antwoord die inhoudelijk ondersteunt.
- Een bron is aanwezig als de broncode expliciet in het antwoord voorkomt.
- Verzinnen van een bron of regel is een feitelijke fout.
- Als het antwoord een bron noemt die niet in expected_sources staat, is dat op zichzelf geen fout; beoordeel of die bron de vraag inhoudelijk ondersteunt.
- Let extra op negatieve claims zoals "code X bestaat niet": daarvoor moet het antwoord duidelijk de juiste broncodelijst noemen.
- Geef uitsluitend geldig JSON terug volgens dit schema:
{
  "facts_ok": boolean,
  "missing_facts": string[],
  "source_assessment": [{"source": string, "present": boolean}],
  "factual_errors": string[],
  "notes": string[]
}`,
            },
            {
                role: "user",
                content: `VRAAG:
${test.question}

VERWACHTE FEITEN:
${expectedFacts || "(geen)"}

VERWACHTE BRONNEN:
${expectedSources}

ANTWOORD VAN JAAPJUNIOR:
${answer}`,
            },
        ],
    });

    return parseJsonObject(String(response.message.content));
}

export async function evaluateCase(
    test: RegressionCase,
    answer: string,
    options: { useLlm?: boolean } = {},
): Promise<Evaluation> {
    const expectedSources = test.expected_sources ?? [];
    const forbiddenSources = test.forbidden_sources ?? [];

    const foundSources = findSources(answer, expectedSources);
    const missingSources = expectedSources.filter((source) => !foundSources.includes(source));
    const forbiddenSourcesFound = findForbiddenSources(answer, forbiddenSources);

    const notes: string[] = [];
    let missingFacts = [...(test.required_facts ?? [])];
    let factScore = test.required_facts?.length ? 0 : 1;

    let llmResult: LlmEvaluation | null = null;

    if (options.useLlm !== false) {
        try {
            llmResult = await llmEvaluate(test, answer);
            missingFacts = llmResult.missing_facts;
            factScore = test.required_facts?.length
                ? Math.max(0, (test.required_facts.length - missingFacts.length) / test.required_facts.length)
                : 1;

            notes.push(...llmResult.notes);

            if (llmResult.factual_errors.length > 0) {
                notes.push(...llmResult.factual_errors.map((x) => `Feitelijke fout: ${x}`));
            }
        } catch (error) {
            notes.push(`LLM-evaluatie kon niet worden uitgevoerd: ${error instanceof Error ? error.message : String(error)}`);
            return {
                id: test.id,
                status: "REVIEW",
                score: 0,
                source_score: expectedSources.length ? foundSources.length / expectedSources.length : 1,
                fact_score: 0,
                found_sources: foundSources,
                missing_sources: missingSources,
                forbidden_sources_found: forbiddenSourcesFound,
                missing_facts: missingFacts,
                notes,
            };
        }
    } else {
        // Zonder LLM is alleen de broncontrole betrouwbaar. De inhoudelijke
        // facts kunnen dan niet verantwoord als PASS worden aangemerkt.
        if (test.required_facts?.length) {
            notes.push("LLM-evaluatie uitgeschakeld; required_facts zijn niet inhoudelijk gevalideerd.");
        } else {
            factScore = 1;
        }
    }

    const sourceScore = expectedSources.length
        ? foundSources.length / expectedSources.length
        : 1;

    if (forbiddenSourcesFound.length > 0) {
        notes.push(`Verboden bron(nen) gevonden: ${forbiddenSourcesFound.join(", ")}`);
    }

    if (missingSources.length > 0) {
        notes.push(`Verwachte bron(nen) niet expliciet genoemd: ${missingSources.join(", ")}`);
    }

    if (missingFacts.length > 0) {
        notes.push(`${missingFacts.length} vereist(e) feit(en) ontbreekt/ontbreken.`);
    }

    const hasLlmFactualErrors = Boolean(llmResult?.factual_errors.length);
    const allFactsOk = missingFacts.length === 0 && !hasLlmFactualErrors;
    const allRequiredSourcesFound = missingSources.length === 0;
    const hasForbiddenSources = forbiddenSourcesFound.length > 0;

    let status: RegressionStatus;

    if (hasForbiddenSources || hasLlmFactualErrors) {
        status = "FAIL";
    } else if (options.useLlm !== false && allFactsOk && allRequiredSourcesFound) {
        status = "PASS";
    } else if (options.useLlm === false && allRequiredSourcesFound && !test.required_facts?.length) {
        status = "PASS";
    } else {
        status = "REVIEW";
    }

    const score = Math.round(((sourceScore + factScore) / 2) * 100) / 100;

    return {
        id: test.id,
        status,
        score,
        source_score: Math.round(sourceScore * 100) / 100,
        fact_score: Math.round(factScore * 100) / 100,
        found_sources: foundSources,
        missing_sources: missingSources,
        forbidden_sources_found: forbiddenSourcesFound,
        missing_facts: missingFacts,
        notes,
    };
}

export function formatEvaluation(result: Evaluation): string {
    const lines = [
        `${result.id}: ${result.status} (score ${Math.round(result.score * 100)}%)`,
    ];

    if (result.missing_sources.length) {
        lines.push(`  ontbrekende bronnen: ${result.missing_sources.join(", ")}`);
    }

    if (result.missing_facts.length) {
        lines.push(`  ontbrekende feiten: ${result.missing_facts.join(" | ")}`);
    }

    if (result.forbidden_sources_found.length) {
        lines.push(`  verboden bronnen: ${result.forbidden_sources_found.join(", ")}`);
    }

    for (const note of result.notes) {
        lines.push(`  - ${note}`);
    }

    return lines.join("\n");
}
