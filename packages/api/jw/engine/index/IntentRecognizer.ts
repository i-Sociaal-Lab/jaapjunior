export enum IntentType {
  Show = "show",
  Explain = "explain",
  Find = "find",
  FindUsage = "findUsage",
  List = "list",
  Compare = "compare",
  Unknown = "unknown"
}

export enum ObjectType {
  Message = "message",
  Rule = "rule",
  CodeList = "codelist",
  Constraint = "constraint",
  Concept = "concept",
  XmlElement = "xmlElement",
  Unknown = "unknown"
}

export interface IntentResult {
  intent: IntentType;
  objectType: ObjectType;
  searchText: string;
  confidence: number;
}

export class IntentRecognizer {

  public recognize(question: string): IntentResult {

    const q = question.toLowerCase();

    const intent = this.detectIntent(q);
    const objectType = this.detectObjectType(q);

    return {
      intent,
      objectType,
      searchText: this.cleanQuestion(q),
      confidence: this.calculateConfidence(intent, objectType)
    };
  }

  private detectIntent(q: string): IntentType {

    if (/(toon|laat zien|geef|overzicht)/.test(q))
      return IntentType.Show;

    if (/(wat betekent|betekenis|leg uit|uitleg|waarom)/.test(q))
      return IntentType.Explain;

    if (/(welke berichten|komt voor|gebruikt|gebruik)/.test(q))
      return IntentType.FindUsage;

    if (/(vergelijk|verschil)/.test(q))
      return IntentType.Compare;

    if (/(lijst|alle)/.test(q))
      return IntentType.List;

    if (/(zoek|vind)/.test(q))
      return IntentType.Find;

    return IntentType.Unknown;
  }

  private detectObjectType(q: string): ObjectType {

    if (/jw\d{3}/i.test(q))
      return ObjectType.Message;

    if (/(op|tr|iv)\d{3}/i.test(q))
      return ObjectType.Rule;

    if (/(wj|cod)\d{3}/i.test(q))
      return ObjectType.CodeList;

    if (/cs\d{3}/i.test(q))
      return ObjectType.Constraint;

    if (/(codelijst|code|codes|waarden)/.test(q))
      return ObjectType.CodeList;

    if (/(xml|element|veld|productcode|begindatum)/.test(q))
      return ObjectType.XmlElement;

    if (/(begrip|definitie)/.test(q))
      return ObjectType.Concept;

    return ObjectType.Unknown;
  }

  private cleanQuestion(q: string): string {

    return q
      .replace(/[^\p{L}\p{N}\s_-]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  private calculateConfidence(
    intent: IntentType,
    objectType: ObjectType
  ): number {

    let score = 0.4;

    if (intent !== IntentType.Unknown)
      score += 0.3;

    if (objectType !== ObjectType.Unknown)
      score += 0.3;

    return score;
  }
}
