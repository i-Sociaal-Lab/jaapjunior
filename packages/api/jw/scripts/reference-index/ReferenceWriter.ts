import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

import { ReferenceIndex } from "./types";

export class ReferenceWriter {

    constructor(
        private readonly root: string
    ) {}

    async write(index: ReferenceIndex): Promise<void> {

        const file = join(
            this.root,
            "generated",
            "reference-index.generated.ts"
        );

        await mkdir(
            dirname(file),
            { recursive: true }
        );

        const content =
            this.build(index);

        await writeFile(
            file,
            content,
            "utf8"
        );

    }

    private build(
        index: ReferenceIndex
    ): string {

        return `/**
 * ----------------------------------------------------------------------------
 * AUTO GENERATED
 * ----------------------------------------------------------------------------
 * Dit bestand is automatisch gegenereerd.
 * Wijzigingen gaan verloren bij een volgende generatie.
 * ----------------------------------------------------------------------------
 */

export interface ReferenceIndex {

    messages: string[];

    rules: string[];

    codelists: string[];

    constraints: string[];

    concepts: string[];

    xmlElements: string[];

    aliases: Record<string, string[]>;

}

export const referenceIndex: ReferenceIndex = ${JSON.stringify(index, null, 4)} as const;
`;

    }

}