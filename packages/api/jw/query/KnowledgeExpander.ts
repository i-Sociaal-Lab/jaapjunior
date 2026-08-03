/**
 * KnowledgeExpander.ts
 * Verrijkt zoekopdrachten met kennisbronnen op basis van intent.
 */

import { QueryIntent } from "./IntentDetector";

export interface KnowledgeExpansion {
  searchTerms: string[];
  preferredSources: string[];
}

export class KnowledgeExpander {

  expand(searchTerms: string[], intent: QueryIntent): KnowledgeExpansion {

    const terms = [...searchTerms];
    const sources: string[] = [];

    switch (intent) {

      case QueryIntent.Message:
        sources.push(
          "Berichtspecificaties",
          "Invulinstructies",
          "Begrippenlijst"
        );
        break;

      case QueryIntent.Rule:
        sources.push(
          "UP-regels",
          "OP-regels",
          "TR-regels",
          "Condities"
        );
        break;

      case QueryIntent.Codelist:
        sources.push(
          "Codelijsten",
          "Begrippenlijst"
        );
        terms.push("waardenlijst");
        break;

      case QueryIntent.Retourcode:
        sources.push(
          "Retourcodes",
          "Berichtspecificaties"
        );
        terms.push("fout");
        break;

      case QueryIntent.Field:
        sources.push(
          "Informatiemodel",
          "Begrippenlijst"
        );
        break;

      default:
        sources.push(
          "Begrippenlijst"
        );
    }

    return {
      searchTerms: [...new Set(terms)],
      preferredSources: sources
    };
  }
}
