/**
 * QueryTypes.ts
 * Gedeelde types voor de Query Optimizer.
 */

export interface SearchHint {
  /**
   * Waar komt deze hint vandaan?
   * Bijvoorbeeld: alias, field of intent.
   */
  source: string;

  /**
   * Tekst die aan de zoekquery wordt toegevoegd.
   */
  text: string;
}

export interface OptimizedQuery {
  /**
   * De oorspronkelijke vraag van de gebruiker.
   */
  originalQuestion: string;

  /**
   * De verrijkte zoektekst die naar de retriever gaat.
   */
  searchText: string;

  /**
   * Alle gevonden hints.
   */
  hints: SearchHint[];
}

export interface FieldMatch {
  /**
   * Herkend veld.
   * Bijvoorbeeld: eenheid, frequentie, geslacht.
   */
  field: string;

  /**
   * De gevonden code.
   */
  code: string;

  /**
   * Bijbehorende codelijst.
   * Bijvoorbeeld: WJ756.
   */
  codeList: string;

  /**
   * Bijbehorend LDT-element.
   * Bijvoorbeeld: LDT_Eenheid.
   */
  element: string;
}

export interface AliasMatch {
  /**
   * Gevonden alias.
   */
  alias: string;

  /**
   * Waar de alias naar vertaald wordt.
   */
  replacement: string;

  /**
   * Extra zoektermen die toegevoegd worden.
   */
  hints: string[];
}