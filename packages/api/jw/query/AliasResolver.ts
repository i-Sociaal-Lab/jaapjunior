/**
 * AliasResolver.ts
 * iJw query aliases en synoniemen.
 */

export interface AliasMatch {
  original: string;
  replacement: string;
}

const ALIASES: Record<string, string[]> = {
  "jeugdige": [
    "client",
    "cliënt",
    "kind",
    "jongere"
  ],
  "zorgaanbieder": [
    "aanbieder",
    "zorgverlener",
    "leverancier"
  ],
  "gemeente": [
    "gemeentelijke toegang",
    "lokale overheid"
  ],
  "JW315": [
    "vot",
    "verzoek om toewijzing"
  ],
  "JW317": [
    "vow",
    "verzoek om wijziging"
  ],
  "JW301": [
    "toewijzing",
    "beschikking"
  ],
  "JW323": [
    "declaratie"
  ],
  "BSN": [
    "burgerservicenummer"
  ]
};

export class AliasResolver {

  resolve(question: string): AliasMatch[] {
    const q = question.toLowerCase();
    const result: AliasMatch[] = [];

    for (const [canonical, aliases] of Object.entries(ALIASES)) {
      for (const alias of aliases) {
        if (q.includes(alias.toLowerCase())) {
          result.push({
            original: alias,
            replacement: canonical
          });
        }
      }
    }

    return result;
  }

  expand(question: string): string[] {
    const terms = [question];
    for (const hit of this.resolve(question)) {
      terms.push(hit.replacement);
    }
    return [...new Set(terms)];
  }
}
