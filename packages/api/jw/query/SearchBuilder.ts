/**
 * SearchBuilder.ts
 * Bouwt een verrijkte zoekopdracht voor LlamaIndex/Qdrant.
 */

import { AliasResolver } from "./AliasResolver";
import { FieldResolver } from "./FieldResolver";
import { IntentDetector, QueryIntent } from "./IntentDetector";

export interface SearchQuery {
  original: string;
  searchText: string;
  searchTerms: string[];
  intent: QueryIntent;
}

export class SearchBuilder {

  private readonly aliases = new AliasResolver();
  private readonly fields = new FieldResolver();
  private readonly intents = new IntentDetector();

  build(question: string): SearchQuery {

    const aliasTerms = this.aliases.expand(question);
    const fieldTerms = this.fields.buildSearchTerms(question);
    const intent = this.intents.detect(question);

    const terms = [...new Set([
      ...aliasTerms,
      ...fieldTerms
    ])];

    // Intent-specifieke uitbreiding
    switch (intent.intent) {

      case QueryIntent.Message:
        terms.push("bericht");
        terms.push("iJw");
        break;

      case QueryIntent.Rule:
        terms.push("bedrijfsregel");
        terms.push("technische regel");
        terms.push("uitgangspunt");
        break;

      case QueryIntent.Codelist:
        terms.push("codelijst");
        terms.push("code");
        break;

      case QueryIntent.Retourcode:
        terms.push("retourbericht");
        terms.push("foutcode");
        break;
    }

    const unique = [...new Set(terms)];

    return {
      original: question,
      searchText: unique.join(" "),
      searchTerms: unique,
      intent: intent.intent
    };
  }
}
