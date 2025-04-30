import "dotenv/config";
import {
	type ALL_AVAILABLE_ANTHROPIC_MODELS,
	Anthropic,
} from "@llamaindex/anthropic";
import { HuggingFaceEmbedding } from "@llamaindex/huggingface";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import { Settings, VectorStoreIndex, agent, openai } from "llamaindex";
import type { ChatModel } from "openai/resources/shared.mjs";

function openaiModel(model: ChatModel) {
	return openai({
		model,
		apiKey: process.env.OPENAI_API_KEY,
	});
}

function anthropic(model: keyof typeof ALL_AVAILABLE_ANTHROPIC_MODELS) {
	return new Anthropic({ model, apiKey: process.env.ANTHROPIC_API_KEY });
}

export const llms = {
	"4.1-nano": () => openaiModel("gpt-4.1-nano"),
	"4.1": () => openaiModel("gpt-4.1"),
	"3.7": () => anthropic("claude-3-7-sonnet"),
};

const reader = new SimpleDirectoryReader();
const documents = await reader.loadData("./data");

Settings.embedModel = new HuggingFaceEmbedding({
	modelType: "BAAI/bge-small-en-v1.5",
});
const index = await VectorStoreIndex.fromDocuments(documents);

const tools = [
	index.queryTool({
		metadata: {
			name: "san_francisco_budget_tool",
			description:
				"This tool can answer detailed questions about the individual components of the budget of San Francisco in 2023-2024.",
		},
		options: { similarityTopK: 10 },
	}),
];
const llm = llms["4.1-nano"]();

const myAgent = agent({ tools, llm });

const toolResponse = await myAgent.run(
	"What's the budget of San Francisco in 2023-2024?",
);
console.log(toolResponse);

// export default {
// 	agent: myAgent,
// };
