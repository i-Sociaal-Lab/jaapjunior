import "dotenv/config";
import { ChromaVectorStore } from "@llamaindex/chroma";
import { GEMINI_MODEL, Gemini } from "@llamaindex/google";
import { Groq } from "@llamaindex/groq";
import { MistralAI } from "@llamaindex/mistral";
import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
	type ChatMessage,
	ContextChatEngine,
	DocStoreStrategy,
	type LLM,
	Settings,
	storageContextFromDefaults,
	VectorStoreIndex,
} from "llamaindex";
import type { IDB } from "./api.js";
import { getEnvOrThrow } from "./get-env.js";
import { prompt13May, promptRobin } from "./prompt.js";

Settings.embedModel = new OpenAIEmbedding({
	model: "text-embedding-ada-002",
});

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
		try {
			await col.delete({ ids });
		} catch {}
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
	"4.1": () => new OpenAI({ model: "gpt-4.1" }),
	"5": () => new OpenAI({ model: "gpt-5-mini", temperature: 1 }),
	"2.5-pro": () => new Gemini({ model: GEMINI_MODEL.GEMINI_2_5_PRO_PREVIEW }),
	"llama-4": () =>
		new Groq({ model: "meta-llama/llama-4-maverick-17b-128e-instruct" }) as LLM,
	"mistral-medium": () => new MistralAI({ model: "mistral-medium" }) as LLM,
} satisfies Record<string, () => LLM>;

export const prompts = {
	// initial: initialPrompt,
	robin: promptRobin,
	may13: prompt13May,
};

export async function query(
	q: string,
	chatHistory: ChatMessage[],
	db: IDB,
	model: keyof typeof llms = "5",
	systemPromptKey: keyof typeof prompts = "may13",
) {
	console.log("Creating chat engine...");
	const retriever = index.asRetriever({
		similarityTopK: 10,
	});
	const chatEngine = new ContextChatEngine({
		retriever,
		systemPrompt: prompts[systemPromptKey],
		chatModel: llms[model](),
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
