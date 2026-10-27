import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { agents } from "../src/agent.js";
import type { ChatMessage } from "llamaindex";
import {
    evaluateCase,
    formatEvaluation,
    type RegressionCase,
    type Evaluation,
} from "./evaluator.js";

interface TestSet {
    name?: string;
    description?: string;
    cases: RegressionCase[];
}

interface RunResults {
    runAt: string;
    testSet: string;
    summary: {
        total: number;
        pass: number;
        review: number;
        fail: number;
    };
    results: Evaluation[];
}

function getArg(name: string): string | undefined {
    const index = process.argv.indexOf(name);
    return index >= 0 ? process.argv[index + 1] : undefined;
}

function hasArg(name: string): boolean {
    return process.argv.includes(name);
}

function timestampForFilename(date: Date): string {
    const pad = (value: number) => String(value).padStart(2, "0");

    return [
        date.getFullYear(),
        pad(date.getMonth() + 1),
        pad(date.getDate()),
    ].join("-") + "_" + [
        pad(date.getHours()),
        pad(date.getMinutes()),
    ].join("-");
}

async function main() {
    const setName = getArg("--set") ?? "jw";
    const requestedId = getArg("--id");
    const limit = Number(getArg("--limit") ?? "0");
    const noLlm = hasArg("--no-llm");
    const stopOnFail = hasArg("--stop-on-fail");

    const setDir = join(process.cwd(), setName);
    const testSetPath = join(setDir, "testset.json");
    const latestResultsPath = join(setDir, "test-results.json");
    const historyDir = join(setDir, "historie");

    const testSet = JSON.parse(
        await readFile(testSetPath, "utf-8"),
    ) as TestSet;

    let cases = testSet.cases;

    if (requestedId) {
        cases = cases.filter((testCase) => testCase.id === requestedId);
    }

    if (limit > 0) {
        cases = cases.slice(0, limit);
    }

    if (cases.length === 0) {
        throw new Error("Geen testcases gevonden.");
    }

    const runAt = new Date();
    const evaluations: Evaluation[] = [];

    console.log(`Start regressietest: ${setName}`);
    console.log(`Aantal tests: ${cases.length}`);
    console.log(`Starttijd: ${runAt.toISOString()}`);
    console.log("");

    for (const testCase of cases) {
        console.log(`▶ ${testCase.id}: ${testCase.question}`);

        try {
            const agent = agents[setName];

            if (!agent) {
                throw new Error(`Geen agent gevonden voor testset '${setName}'.`);
            }

            const messages: ChatMessage[] = [
                {
                    role: "user",
                    content: testCase.question,
                },
            ];

            const answer = await agent.query(
                testCase.question,
                messages,
                {},
            );

            const answerText =
                typeof answer === "string"
                    ? answer
                    : answer.response ?? String(answer);

            const evaluation = await evaluateCase(
                testCase,
                answerText,
                noLlm,
            );

            evaluations.push(evaluation);

            console.log(formatEvaluation(evaluation));
            console.log("");

            if (stopOnFail && evaluation.status === "FAIL") {
                console.log("Gestopt door --stop-on-fail.");
                break;
            }
        } catch (error) {
            const evaluation: Evaluation = {
                id: testCase.id,
                status: "FAIL",
                question: testCase.question,
                answer: "",
                expectedSources: testCase.expectedSources ?? [],
                foundSources: [],
                missingSources: testCase.expectedSources ?? [],
                forbiddenSources: [],
                factsOk: false,
                missingFacts: [],
                sourceAssessment: "Test kon niet worden uitgevoerd.",
                factualErrors: [
                    error instanceof Error ? error.message : String(error),
                ],
                notes: [],
            };

            evaluations.push(evaluation);

            console.error(formatEvaluation(evaluation));
            console.log("");

            if (stopOnFail) {
                console.log("Gestopt door --stop-on-fail.");
                break;
            }
        }
    }

    const summary = {
        total: evaluations.length,
        pass: evaluations.filter((result) => result.status === "PASS").length,
        review: evaluations.filter((result) => result.status === "REVIEW").length,
        fail: evaluations.filter((result) => result.status === "FAIL").length,
    };

    const output: RunResults = {
        runAt: runAt.toISOString(),
        testSet: setName,
        summary,
        results: evaluations,
    };

    // Zorg dat historie bestaat.
    await mkdir(historyDir, { recursive: true });

    // test-results.json = altijd de laatste run.
    await writeFile(
        latestResultsPath,
        JSON.stringify(output, null, 2) + "\n",
        "utf-8",
    );

    // historie/YYYY-MM-DD_HH-mm.json = permanente kopie van deze run.
    const historyPath = join(
        historyDir,
        `${timestampForFilename(runAt)}.json`,
    );

    await writeFile(
        historyPath,
        JSON.stringify(output, null, 2) + "\n",
        "utf-8",
    );

    console.log("========================================");
    console.log("Regressietest afgerond");
    console.log("========================================");
    console.log(`Totaal : ${summary.total}`);
    console.log(`PASS   : ${summary.pass}`);
    console.log(`REVIEW : ${summary.review}`);
    console.log(`FAIL   : ${summary.fail}`);
    console.log("");
    console.log(`Laatste resultaten: ${latestResultsPath}`);
    console.log(`Historie:            ${historyPath}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
