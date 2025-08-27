import { getEnv } from "@llamaindex/env";
import { Tokenizers } from "@llamaindex/env/tokenizers";
import { OpenAI } from "@llamaindex/openai";
import type { LLMMetadata } from "llamaindex";

export class Openrouter extends OpenAI {
	constructor(
		init?: Omit<Partial<OpenAI>, "session" | "additionalChatOptions"> & {
			additionalChatOptions?: {
				provider?: {
					sort?: "throughput" | "latency";
				};
			};
		},
	) {
		const {
			apiKey = getEnv("OPENROUTER_API_KEY"),
			baseURL = "https://openrouter.ai/api/v1",
			additionalChatOptions,
			...rest
		} = init ?? {};
		super({
			apiKey,
			baseURL,
			additionalChatOptions:
				additionalChatOptions as OpenAI["additionalChatOptions"],
			...rest,
		});
	}

	get metadata(): LLMMetadata {
		return {
			model: this.model,
			temperature: this.temperature,
			topP: this.topP,
			maxTokens: this.maxTokens,
			contextWindow: this.maxTokens ?? 200000,
			tokenizer: Tokenizers.CL100K_BASE,
			structuredOutput: true,
		};
	}
}
