import { ChromaVectorStore } from "@llamaindex/chroma";
import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
	type ChatMessage,
	ChatMessageAdapter,
	ContextChatEngine,
	DocStoreStrategy,
	JinaAIReranker,
	type LLM,
	Memory,
	Settings,
	storageContextFromDefaults,
	VectorStoreIndex,
} from "llamaindex";
import type { IDB } from "./api.js";
import { getEnvOrThrow } from "./get-env.js";
import { Openrouter } from "./openrouter.js";
import { prompt13May } from "./prompt.js";

Settings.embedModel = new OpenAIEmbedding({
	model: "text-embedding-ada-002",
});
Settings.chunkOverlap = 100;

const chromaUri = getEnvOrThrow("CHROMA_URI");
const vectorStore = new ChromaVectorStore({
	collectionName: getEnvOrThrow("CHROMA_COLLECTION"),
	chromaClientParams: { path: chromaUri },
	embeddingModel: Settings.embedModel,
});

const existingDocs = await vectorStore.getCollection().then((c) => c.get());
const existingDocIds = new Set(existingDocs.metadatas?.map((m) => m?.doc_id));

console.log("Loading documents...");
const reader = new SimpleDirectoryReader();
const newDocs = await reader.loadData("./jw").then((docs) =>
	docs.map((d) => {
		d.id_ = `${d.id_}__${d.generateHash()}`;
		return d;
	}),
);
const newDocIds = new Set(newDocs.map((d) => d.id_));

const docsToDelete = existingDocIds.difference(newDocIds);
const docsToAdd = newDocIds.difference(existingDocIds);

const col = await vectorStore.getCollection();

for (const doc of docsToDelete) {
	if (!doc) continue;

	const { ids } = await col.get({ where: { doc_id: doc } });
	if (ids.length) {
		const batches = ids.reduce((acc, id, i) => {
			if (i % 100 === 0) {
				acc.push([id]);
			} else {
				acc[acc.length - 1].push(id);
			}
			return acc;
		}, [] as string[][]);

		for (const batch of batches) {
			try {
				await col.delete({ ids: batch });
			} catch (err) {
				console.error(err);
			}
		}
	}
}

const newDocsToAdd = newDocs.filter((d) => docsToAdd.has(d.id_));

console.log("Creating vector store...");
const storageContext = await storageContextFromDefaults({ vectorStore });
const index = await VectorStoreIndex.fromDocuments(newDocsToAdd, {
	docStoreStrategy: DocStoreStrategy.UPSERTS,
	storageContext,
});

export const llms = {
	"4.1": () => new OpenAI({ model: "gpt-4.1", temperature: 0.2 }),
	qwen3: () =>
		new Openrouter({
			baseURL: "https://openrouter.ai/api/v1",
			apiKey: process.env.OPENROUTER_API_KEY,
			model: "qwen/qwen3-235b-a22b-2507",
			temperature: 0.2,
			maxTokens: 100000,
			additionalChatOptions: {
				provider: {
					sort: "throughput",
				},
			},
		}),
} satisfies Record<string, () => LLM>;

export const prompts = {
	may13: prompt13May,
};

export async function query(
	q: string,
	chatHistory: ChatMessage[],
	db: IDB,
	model: keyof typeof llms = "4.1",
	systemPromptKey: keyof typeof prompts = "may13",
) {
	console.log("Creating chat engine...");
	const retriever = index.asRetriever({
		similarityTopK: 100,
	});

	const llm = llms[model]();

	const chatEngine = new ContextChatEngine({
		retriever,
		nodePostprocessors: [
			new JinaAIReranker({
				model: "jina-reranker-v2-base-multilingual",
				topN: 10,
			}),
		],
		systemPrompt: prompts[systemPromptKey],
		chatModel: llm,
	});

	const startTime = Date.now();

	console.log("Chat engine created. Sending message");
	const response = await chatEngine.chat({
		message: q,
		chatHistory,
	});

	const endTime = Date.now();

	const responseTime = endTime - startTime;

	console.log("Model responded", model, responseTime);
	db.prepare(
		"INSERT INTO model_responses (model, response_time) VALUES ($1, $2)",
	).run({
		$1: model,
		$2: responseTime,
	});

	response.message.options ??= {};
	// @ts-expect-error
	response.message.options.model = model;
	// @ts-expect-error
	response.message.options.prompt = systemPromptKey;

	return response;
}
