import "dotenv/config";
import { ChromaVectorStore } from "@llamaindex/chroma";
import { GEMINI_MODEL, Gemini } from "@llamaindex/google";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
	DocStoreStrategy,
	VectorStoreIndex,
	storageContextFromDefaults,
} from "llamaindex";
import { getEnvOrThrow } from "./get-env.js";
import { SYSTEM_PROMPT } from "./prompt.js";

console.time("query");

console.log("Loading vector store...");
const chromaUri = `http://${getEnvOrThrow("CHROMA_HOST")}:${getEnvOrThrow("CHROMA_PORT")}`;
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

console.log("Creating llm...");
const geminiLLM = new Gemini({
	model: GEMINI_MODEL.GEMINI_2_0_FLASH,
});

console.log("Creating chat engine...");
const chatEngine = index.asChatEngine({
	systemPrompt: SYSTEM_PROMPT,
	chatModel: geminiLLM,
});

console.log("Chat engine created. Sending message");
console.time("chat");
const response = await chatEngine.chat({
	message: "Is het gebruik van de iStandaarden verplicht?",
});
console.timeEnd("chat");

console.log(response);
console.timeEnd("query");
