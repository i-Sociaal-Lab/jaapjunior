import { readFile } from "node:fs/promises";
import { basename } from "node:path";

import { BaseParser, ParsedDocument } from "./BaseParser";
import { tokenize } from "./GeneratorUtils";

export class JsonParser extends BaseParser {

    supports(file: string): boolean {
        return file.toLowerCase().endsWith(".json");
    }

    async parse(file: string): Promise<ParsedDocument> {

        const json = JSON.parse(
            await readFile(file, "utf8")
        );

        const root = json.codelijst ?? json;

        const id =
            root.id ??
            basename(file).split("_")[0];

        const name =
            root.naam ??
            root.name ??
            id;

        const element =
            root.element;

        const codes =
            (root.codes ?? [])
                .map((v: any) => String(v.code ?? v.id ?? v));

        return {

            id,

            name,

            type: "json",

            element,

            description: root.omschrijving,

            messages: root.berichten ?? [],

            keywords: [
                id,
                name,
                ...(element ? [element] : []),
                ...tokenize(name)
            ],

            codes,

            source: basename(file)
        };

    }

}