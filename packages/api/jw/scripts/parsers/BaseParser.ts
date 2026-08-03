export interface ParsedDocument {

    id: string;

    name: string;

    type: string;

    element?: string;

    description?: string;

    keywords: string[];

    messages: string[];

    codes: string[];

    source: string;
}

export abstract class BaseParser {

    abstract supports(file: string): boolean;

    abstract parse(file: string): Promise<ParsedDocument>;

}