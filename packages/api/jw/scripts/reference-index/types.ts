export interface ReferenceIndex {

    messages: string[];

    rules: string[];

    codelists: string[];

    constraints: string[];

    concepts: string[];

    xmlElements: string[];

    aliases: Record<string, string[]>;

}

export interface ReferenceDocument {

    id: string;

    type: string;

    source: string;

    text: string;

    messages: string[];

    rules: string[];

    codelists: string[];

    constraints: string[];

    concepts: string[];

    xmlElements: string[];

}

export interface CollectorResult {

    documents: ReferenceDocument[];

    index: ReferenceIndex;

}

export function createEmptyReferenceIndex(): ReferenceIndex {

    return {

        messages: [],

        rules: [],

        codelists: [],

        constraints: [],

        concepts: [],

        xmlElements: [],

        aliases: {}

    };

}

export function uniqueSorted(values: Iterable<string>): string[] {

    return [...new Set(values)]
        .filter(value => value.length > 0)
        .sort((a, b) => a.localeCompare(b));

}