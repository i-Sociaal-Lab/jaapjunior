import "dotenv/config";
import { ChromaVectorStore } from "@llamaindex/chroma";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
	DocStoreStrategy,
	VectorStoreIndex,
	storageContextFromDefaults,
} from "llamaindex";
import { getEnvOrThrow } from "./get-env.js";

export type AvailableModel = "4.1" | "4.1-nano";

const chromaUri = getEnvOrThrow("CHROMA_URI");
const vectorStore = new ChromaVectorStore({
	collectionName: getEnvOrThrow("CHROMA_COLLECTION"),
	chromaClientParams: { path: chromaUri },
});

console.log("Deleting existing collection...");
const col = await vectorStore.getCollection();
await col.delete();

console.log("Loading documents...");
const reader = new SimpleDirectoryReader();
const documents = await reader.loadData("./data");

console.log("Indexing documents...");
const storageContext = await storageContextFromDefaults({ vectorStore });
await VectorStoreIndex.fromDocuments(documents, {
	docStoreStrategy: DocStoreStrategy.UPSERTS,
	storageContext,
});
