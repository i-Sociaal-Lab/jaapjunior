/**
 * IntentDetector.ts
 * Detecteert het type vraag zodat de QueryOptimizer
 * gerichter kan zoeken.
 */

export enum QueryIntent {
  Unknown = "unknown",
  Codelist = "codelist",
  Message = "message",
  Rule = "rule",
  Retourcode = "retourcode",
  Field = "field"
}

export interface IntentResult {
  intent: QueryIntent;
  confidence: number;
}

export class IntentDetector {

  detect(question: string): IntentResult {

    const q = question.toLowerCase();

    if (/\bjw\d{3}\b/i.test(q))
      return { intent: QueryIntent.Message, confidence: 1.0 };

    if (/\b(op|up|tr|cd|cs)\d+/i.test(q))
      return { intent: QueryIntent.Rule, confidence: 1.0 };

    if (q.includes("retourcode"))
      return { intent: QueryIntent.Retourcode, confidence: 0.95 };

    if (
      q.includes("codelijst") ||
      q.includes("code ") ||
      q.includes("eenheid") ||
      q.includes("geslacht") ||
      q.includes("verwijzer")
    )
      return { intent: QueryIntent.Codelist, confidence: 0.90 };

    if (
      q.includes("element") ||
      q.includes("veld") ||
      q.includes("attribuut")
    )
      return { intent: QueryIntent.Field, confidence: 0.80 };

    return {
      intent: QueryIntent.Unknown,
      confidence: 0.0
    };
  }
}
