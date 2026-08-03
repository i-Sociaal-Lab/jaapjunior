import { IntentRecognizer, IntentResult } from "../index/IntentRecognizer.js";
import { KnowledgeResolver, ResolvedKnowledge } from "../index/KnowledgeResolver.js";
import { SearchProfileBuilder, SearchProfile } from "../index/SearchProfile.js";

export interface QueryPipelineResult {
    originalQuestion: string;
    intent: IntentResult;
    knowledge: ResolvedKnowledge[];
    profile: SearchProfile;
}

export class QueryPipeline {

    private readonly intentRecognizer = new IntentRecognizer();
    private readonly knowledgeResolver = new KnowledgeResolver();
    private readonly searchProfileBuilder = new SearchProfileBuilder();

    public process(question: string): QueryPipelineResult {

        const intent = this.intentRecognizer.recognize(question);
        const knowledge = this.knowledgeResolver.resolve(question);

        const profile = this.searchProfileBuilder.build(
            question,
            knowledge.map(k => k.object.id)
        );

        return {
            originalQuestion: question,
            intent,
            knowledge,
            profile
        };
    }
}
