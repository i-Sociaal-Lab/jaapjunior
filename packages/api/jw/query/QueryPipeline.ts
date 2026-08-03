/**
 * QueryPipeline.ts
 * Centrale orchestratie van de query-optimalisatie.
 */

import { AliasResolver } from "./AliasResolver";
import { FieldResolver } from "./FieldResolver";
import { IntentDetector } from "./IntentDetector";
import { SearchBuilder } from "./SearchBuilder";
import { KnowledgeExpander } from "./KnowledgeExpander";

export interface QueryPipelineResult {
  originalQuestion: string;
  optimizedSearchText: string;
  searchTerms: string[];
  intent: string;
  preferredSources: string[];
}

export class QueryPipeline {

  private readonly aliases = new AliasResolver();
  private readonly fields = new FieldResolver();
  private readonly intents = new IntentDetector();
  private readonly builder = new SearchBuilder();
  private readonly knowledge = new KnowledgeExpander();

  process(question: string): QueryPipelineResult {

    const intentResult = this.intents.detect(question);

    // Bouw basiszoekopdracht
    const search = this.builder.build(question);

    // Verrijk met kennisbronnen
    const expansion = this.knowledge.expand(
      search.searchTerms,
      intentResult.intent
    );

    return {
      originalQuestion: question,
      optimizedSearchText: expansion.searchTerms.join(" "),
      searchTerms: expansion.searchTerms,
      intent: intentResult.intent,
      preferredSources: expansion.preferredSources
    };
  }
}
