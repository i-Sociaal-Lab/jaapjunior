import { BaseParser } from "./BaseParser";
import { MarkdownParser } from "./MarkdownParser";
import { JsonParser } from "./JsonParser";

export class ParserFactory {

    private readonly parsers: BaseParser[] = [
        new MarkdownParser(),
        new JsonParser()
    ];

    get(file: string): BaseParser {

        for (const parser of this.parsers) {

            if (parser.supports(file))
                return parser;

        }

        throw new Error(
            `Geen parser beschikbaar voor ${file}`
        );
    }

}