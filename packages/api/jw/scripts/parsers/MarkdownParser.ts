import { readFile } from "node:fs/promises";
import { basename } from "node:path";

import { BaseParser, ParsedDocument } from "./BaseParser";
import { firstMatch, tokenize } from "./GeneratorUtils";

export class MarkdownParser extends BaseParser {

    supports(file: string): boolean {
        return file.toLowerCase().endsWith(".md");
    }

    async parse(file: string): Promise<ParsedDocument> {

        const text = await readFile(file, "utf8");

        const id =
            firstMatch(/\|\s*ID\s*\|\s*(.+?)\s*\|/i, text)
            ?? basename(file).split("_")[0];

        const name =
            firstMatch(/\|\s*Naam\s*\|\s*(.+?)\s*\|/i, text)
            ?? id;

        const element =
            firstMatch(/\|\s*Element\s*\|\s*(.+?)\s*\|/i, text);

        const description =
            firstMatch(/\|\s*Omschrijving\s*\|\s*(.+?)\s*\|/i, text);

        const messages = [
            ...new Set(
                [...text.matchAll(/\bJW\d{3}\b/g)].map(v => v[0])
            )
        ];

        const codes = [
            ...new Set(
                [...text.matchAll(/\|\s*([A-Za-z0-9]+)\s*\|/g)]
                    .map(v => v[1])
            )
        ];

        return {

            id,

            name,

            type: "markdown",

            element,

            description,

            messages,

            keywords: [
                id,
                name,
                ...(element ? [element] : []),
                ...tokenize(name),
                ...(description ? tokenize(description) : [])
            ],

            codes,

            source: basename(file)
        };

    }

}