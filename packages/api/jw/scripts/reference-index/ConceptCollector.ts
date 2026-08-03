import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ReferenceCollector } from "./ReferenceCollector";
import { uniqueSorted } from "./types";

export class ConceptCollector {

    constructor(
        private readonly collector: ReferenceCollector
    ) {}

    async collect(): Promise<void> {

        const file = join(
            this.collector.root,
            "bronnen",
            "begrippen",
            "Begrippenlijst_Jw_en_Wmo.md"
        );

        try {

            const text = await readFile(file, "utf8");

            const concepts = new Set<string>();

            //
            // Alle begrippen staan onder ###.
            // Sommige zijn vetgedrukt (**KTO**).
            //

            const regex = /^###\s+\**(.+?)\**\s*$/gm;

            let match: RegExpExecArray | null;

            while ((match = regex.exec(text)) !== null) {

                const concept = match[1]
                    .replace(/\*\*/g, "")
                    .trim();

                if (concept.length === 0) {
                    continue;
                }

                concepts.add(concept);

            }

            this.collector.index.concepts =
                uniqueSorted(concepts);

        }

        catch (err) {

            console.error("ConceptCollector:", err);

            this.collector.index.concepts = [];

        }

    }

}