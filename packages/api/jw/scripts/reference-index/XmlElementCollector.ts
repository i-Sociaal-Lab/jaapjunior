import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

import { ReferenceCollector } from "./ReferenceCollector";
import { uniqueSorted } from "./types";

export class XmlElementCollector {

    constructor(
        private readonly collector: ReferenceCollector
    ) {}

    async collect(): Promise<void> {

        const folder = join(
            this.collector.root,
            "bronnen",
            "xsd"
        );

        const elements = new Set<string>();

        const files = await readdir(folder);

        for (const file of files) {

            if (!file.toLowerCase().endsWith(".xsd")) {
                continue;
            }

            const xml = await readFile(
                join(folder, file),
                "utf8"
            );

            const regex =
                /<xs:element[^>]*name="([^"]+)"/gi;

            let match: RegExpExecArray | null;

            while ((match = regex.exec(xml)) !== null) {

                elements.add(match[1]);

            }

        }

        this.collector.index.xmlElements =
            uniqueSorted(elements);

    }

}