import { KnowledgeType } from "../model/KnowledgeObject.js";

export interface SearchProfile {
  /**
   * Oorspronkelijke gebruikersvraag.
   */
  originalQuery: string;

  /**
   * Zoektekst die naar de retriever kan.
   */
  searchQuery: string;

  /**
   * Herkende objecttypen waarop gefilterd kan worden.
   */
  preferredTypes: KnowledgeType[];

  /**
   * Maximaal aantal documenten dat opgehaald moet worden.
   */
  similarityTopK: number;

  /**
   * Extra zoektermen (aliassen, synoniemen, codes).
   */
  keywords: string[];

  /**
   * Uitleg waarom dit profiel is gekozen.
   */
  reason: string;
}

export class SearchProfileBuilder {

  public build(
    query: string,
    keywords: string[] = [],
    preferredTypes: KnowledgeType[] = []
  ): SearchProfile {

    const uniqueKeywords = [...new Set(
      keywords
        .map(k => k.trim())
        .filter(Boolean)
    )];

    return {
      originalQuery: query,
      searchQuery: uniqueKeywords.length
        ? uniqueKeywords.join(" ")
        : query,
      preferredTypes,
      similarityTopK: this.determineTopK(preferredTypes),
      keywords: uniqueKeywords,
      reason: this.buildReason(preferredTypes)
    };
  }

  private determineTopK(types: KnowledgeType[]): number {

    if (types.length === 0) {
      return 20;
    }

    if (types.length === 1) {
      return 10;
    }

    return 15;
  }

  private buildReason(types: KnowledgeType[]): string {

    if (types.length === 0) {
      return "Algemeen zoekprofiel";
    }

    return `Zoekprofiel gebaseerd op: ${types.join(", ")}`;
  }
}
