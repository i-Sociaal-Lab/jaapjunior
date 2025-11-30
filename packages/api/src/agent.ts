import { Anthropic } from "@llamaindex/anthropic";
import { QdrantVectorStore } from "@llamaindex/qdrant";
import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import {
	type ChatMessage,
	ContextChatEngine,
	DocStoreStrategy,
	JinaAIReranker,
	type LLM,
	Settings,
	storageContextFromDefaults,
	VectorStoreIndex,
} from "llamaindex";
import type { IDB } from "./api.js";
import { getEnvOrThrow } from "./get-env.js";
import { Openrouter } from "./openrouter.js";

Settings.embedModel = new OpenAIEmbedding({
	model: "text-embedding-ada-002",
});
Settings.chunkOverlap = 100;

const qdrantUri = getEnvOrThrow("QDRANT_URI");

// Qdrant URL configuration for different environments
function getQdrantConfig(uri: string) {
	// For localhost, use full URI with port (combined container setup)
	if (uri.includes('localhost') || uri.includes('127.0.0.1')) {
		return { url: uri };
	}

	// For Azure internal ingress, strip port (ingress doesn't support explicit ports)
	const urlWithoutPort = uri.replace(/:6333$/, '');
	if (uri.includes('.internal.') || uri.includes('.azurecontainerapps.io')) {
		return { url: urlWithoutPort };
	}

	// For other URLs, use as-is
	return { url: uri };
}

async function createIndex(collectionName: string, dataDir = "./jw") {
	console.log(
		`Creating index. collectionName: ${collectionName}, dataDir: ${dataDir}`,
	);

	const qdrantConfig = getQdrantConfig(qdrantUri);
	console.log(`Qdrant config:`, qdrantConfig);

	const vectorStore = new QdrantVectorStore({
		collectionName,
		...qdrantConfig,
	});

	console.log("Initializing storage context...");
	const storageContext = await storageContextFromDefaults({ vectorStore });

	console.log("Loading documents...");
	const reader = new SimpleDirectoryReader();
	const docs = await reader.loadData(dataDir);

	console.log(`Creating vector store index with ${docs.length} documents...`);
	const index = await VectorStoreIndex.fromDocuments(docs, {
		storageContext,
	});

	console.log("Index created successfully");
	return index;
}

export const llms = {
	"4.1": () => new OpenAI({ model: "gpt-4.1", temperature: 0.2 }),
	qwen3: () =>
		new Openrouter({
			model: "qwen/qwen3-235b-a22b-2507",
			temperature: 0.2,
			maxTokens: 100000,
			additionalChatOptions: {
				provider: {
					sort: "throughput",
				},
			},
		}),
	"haiku-4.5": () =>
		new Anthropic({
			model: "claude-haiku-4-5-20251001",
			temperature: 0.2,
		}),
} satisfies Record<string, () => LLM>;

interface AgentConfig {
	collectionName: string;
	dataPath: string;
	promptPath: string;
	model: keyof typeof llms;
}

class Agent {
	private constructor(
		public index: VectorStoreIndex,
		public model: keyof typeof llms,
		public prompt: string,
	) {}

	static async fromConfig(config: AgentConfig) {
		const index = await createIndex(config.collectionName, config.dataPath);
		const prompt = await Bun.file(config.promptPath).text();
		return new Agent(index, config.model, prompt);
	}

	async query(
		q: string,
		chatHistory: ChatMessage[],
		db: IDB,
		model?: keyof typeof llms,
	) {
		// Use provided model or fall back to agent's default
		const actualModel = model || this.model;
		
		console.log("Creating chat engine...");
		const retriever = this.index.asRetriever({
			similarityTopK: 100,
		});

		const llm = llms[actualModel]();

		const chatEngine = new ContextChatEngine({
			retriever,
			nodePostprocessors: [
				new JinaAIReranker({
					model: "jina-reranker-v2-base-multilingual",
					topN: 10,
				}),
			],
			systemPrompt: this.prompt,
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

		console.log("Model responded", actualModel, responseTime);
		db.prepare(
			"INSERT INTO model_responses (model, response_time) VALUES ($1, $2)",
		).run({
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

// Agent configurations
const agentConfigs = {
	jw: {
		collectionName: "jaapjunior",
		dataPath: "./jw/bronnen",
		promptPath: "./jw/prompt.md",
		model: "4.1" as keyof typeof llms,
	},
	wmo: {
		collectionName: "wmo",
		dataPath: "./wmo/bronnen",
		promptPath: "./wmo/prompt.md",
		model: "4.1" as keyof typeof llms,
	},
	"cs-wmo": {
		collectionName: "cs-wmo",
		dataPath: "./cs-wmo/bronnen",
		promptPath: "./cs-wmo/prompt.md",
		model: "haiku-4.5" as keyof typeof llms,
	},
} satisfies Record<string, AgentConfig>;

const agentCache: Partial<Record<keyof typeof agentConfigs, Promise<Agent>>> = {};

// Lazy-load function to get agents on-demand
async function getAgent(name: keyof typeof agentConfigs): Promise<Agent> {
	if (!agentCache[name]) {
		console.log(`🚀 Initializing ${name.toUpperCase()} agent...`);
		agentCache[name] = Agent.fromConfig(agentConfigs[name]);
	}
	return agentCache[name]!;
}

// Export agents as callable functions for lazy initialization
export const agents = {
	jw: () => getAgent("jw"),
	wmo: () => getAgent("wmo"),
	"cs-wmo": () => getAgent("cs-wmo"),
};
