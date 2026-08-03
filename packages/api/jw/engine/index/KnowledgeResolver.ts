import { KnowledgeEngine } from "./KnowledgeEngine.js";
import { KnowledgeObject } from "../model/KnowledgeObject.js";

export interface ResolvedKnowledge {
    object: KnowledgeObject;
    confidence: number;
    reason: string;
}

export class KnowledgeResolver {

    private readonly engine = KnowledgeEngine.initialize();

    public resolve(question: string): ResolvedKnowledge[] {

        const results = new Map<string, ResolvedKnowledge>();
        const tokens = this.tokenize(question);

        for (const token of tokens) {

            const byId = this.engine.getById(token.toUpperCase());

            if (byId) {
                results.set(byId.id, {
                    object: byId,
                    confidence: 1.0,
                    reason: "Exact ID"
                });
            }

            for (const object of this.engine.findByAlias(token)) {
                this.add(results, object, 0.95, "Alias");
            }

            for (const object of this.engine.findByTitle(token)) {
                this.add(results, object, 0.85, "Titel");
            }

            for (const object of this.engine.search(token)) {
                this.add(results, object, 0.70, "Zoekindex");
            }
        }

        return [...results.values()].sort((a,b)=>b.confidence-a.confidence);
    }

    private add(
        results: Map<string, ResolvedKnowledge>,
        object: KnowledgeObject,
        confidence: number,
        reason: string
    ): void {

        const existing = results.get(object.id);

        if (!existing || confidence > existing.confidence) {
            results.set(object.id,{
                object,
                confidence,
                reason
            });
        }
    }

    private tokenize(question: string): string[] {

        return question
            .toLowerCase()
            .replace(/[^\p{L}\p{N}\s_-]/gu," ")
            .split(/\s+/)
            .map(t=>t.trim())
            .filter(t=>t.length>=2);
    }
}
