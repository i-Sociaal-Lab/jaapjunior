import { ChromaVectorStore } from "@llamaindex/chroma";
import { OpenAIEmbedding } from "@llamaindex/openai";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
	DocStoreStrategy,
	Settings,
	storageContextFromDefaults,
	VectorStoreIndex,
} from "llamaindex";
import { getEnvOrThrow } from "./get-env.js";

const chromaUri = getEnvOrThrow("CHROMA_URI");
const vectorStore = new ChromaVectorStore({
	collectionName: getEnvOrThrow("CHROMA_COLLECTION"),
	chromaClientParams: { path: chromaUri },
});

console.log("Deleting existing collection...");
const col = await vectorStore.getCollection();
const { ids } = await col.get();
if (ids.length) {
	await col.delete({ ids });
}

console.log("Loading documents...");
const reader = new SimpleDirectoryReader();
const documents = await reader.loadData("./jw");

console.log("Indexing documents...");
Settings.embedModel = new OpenAIEmbedding({
	model: "text-embedding-ada-002",
});
const storageContext = await storageContextFromDefaults({ vectorStore });
await VectorStoreIndex.fromDocuments(documents, {
	docStoreStrategy: DocStoreStrategy.UPSERTS,
	storageContext,
});
