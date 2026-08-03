import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ReferenceCollector } from "./ReferenceCollector";
import { uniqueSorted } from "./types";

export class ConstraintCollector {

    constructor(
        private readonly collector: ReferenceCollector
    ) {}

    async collect(): Promise<void> {

        const file = join(
            this.collector.root,
            "bronnen",
            "regels",
            "condities-constraints",
            "Condities_constraints_per_data-element.md"
        );

        try {

            const text = await readFile(file, "utf8");

            const matches = text.match(/\b(?:CD|CS)\d+\b/gi) ?? [];

            this.collector.index.constraints =
                uniqueSorted(
                    matches.map(v => v.toUpperCase())
                );

        }

        catch {

            this.collector.index.constraints = [];

        }

    }

}