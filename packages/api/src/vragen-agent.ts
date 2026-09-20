import type { ChatMessage, LLM } from "llamaindex";

export interface QuestionAnalysis {
	vraag: string;
	vraagtype: string[];
	onderwerp: string;
	entiteiten: string[];
	berichttypen: string[];
	codelijsten: string[];
	codes: string[];
	gegevenselementen: string[];
	relatie_gezocht: boolean;
	relaties: string[];
	broncategorieen: string[];
	zoekstrategie: "single" | "multi" | "relational" | "process" | "rule";
	zoekopdrachten: string[];
	gewenste_output: string;
	onzekerheden: string[];
	verduidelijkingsvraag_nodig: boolean;
	verduidelijkingsvraag: string;
}

export class VragenAgent {
	constructor(
		private readonly llm: LLM,
		private readonly prompt: string,
	) {}

	async analyze(
		question: string,
		chatHistory: ChatMessage[] = [],
	): Promise<QuestionAnalysis> {
		const messages: ChatMessage[] = [
			{ role: "system", content: this.prompt },
			...chatHistory.slice(-6),
			{ role: "user", content: question },
		];

		const response = await this.llm.chat({ messages });
		const content = String(response.message.content).trim();
		const json = this.extractJson(content);

		try {
			return JSON.parse(json) as QuestionAnalysis;
		} catch {
			throw new Error(`Vragen Agent returned invalid JSON: ${json}`);
		}
	}

	private extractJson(content: string): string {
		const fenced = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
		if (fenced?.[1]) return fenced[1].trim();

		const start = content.indexOf("{");
		const end = content.lastIndexOf("}");
		if (start >= 0 && end > start) {
			return content.slice(start, end + 1);
		}

		throw new Error("Vragen Agent returned no JSON");
	}
}
