import "dotenv/config";
import { ChromaVectorStore } from "@llamaindex/chroma";
import { GEMINI_MODEL, Gemini } from "@llamaindex/google";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
	type ChatMessage,
	DocStoreStrategy,
	type LLM,
	OpenAI,
	VectorStoreIndex,
	storageContextFromDefaults,
} from "llamaindex";
import { getEnvOrThrow } from "./get-env.js";
import { initialPrompt, promptRobin } from "./prompt.js";

export type AvailableModel = "4.1" | "4.1-nano";

const chromaUri = getEnvOrThrow("CHROMA_URI");
const vectorStore = new ChromaVectorStore({
	collectionName: getEnvOrThrow("CHROMA_COLLECTION"),
	chromaClientParams: { path: chromaUri },
});

const fromStore = true;
let index: VectorStoreIndex;
if (fromStore) {
	console.log("Creating vector store...");
	index = await VectorStoreIndex.fromVectorStore(vectorStore);
} else {
	console.log("Loading documents...");
	const reader = new SimpleDirectoryReader();
	const documents = await reader.loadData("./data");

	console.log("Indexing documents...");

	const storageContext = await storageContextFromDefaults({ vectorStore });
	index = await VectorStoreIndex.fromDocuments(documents, {
		docStoreStrategy: DocStoreStrategy.UPSERTS,
		storageContext,
	});
}

interface Strategy {
	model: () => LLM;
	systemPrompt: string;
}

function gemini(model: GEMINI_MODEL) {
	return new Gemini({
		model,
	});
}

export const llms = {
	flash: () => new Gemini({ model: GEMINI_MODEL.GEMINI_2_0_FLASH }),
	"4.1": () => new OpenAI({ model: "gpt-4.1" }),
	"4.1-nano": () => new OpenAI({ model: "gpt-4.1-nano" }),
};

export const prompts = {
	initial: initialPrompt,
	robin: promptRobin,
};

export async function query(
	q: string,
	chatHistory: (ChatMessage | ChatMessage[])[],
	model: keyof typeof llms = "4.1",
	systemPromptKey: keyof typeof prompts = "initial",
) {
	console.log("Creating chat engine...");
	const chatEngine = index.asChatEngine({
		systemPrompt: prompts[systemPromptKey],
		chatModel: llms[model](),
	});

	console.log("Chat engine created. Sending message");
	const response = await chatEngine.chat({
		message: q,
		chatHistory,
	});

	response.message.options ??= {};
	response.message.options.model = model;
	response.message.options.prompt = systemPromptKey;

	return response;
}
