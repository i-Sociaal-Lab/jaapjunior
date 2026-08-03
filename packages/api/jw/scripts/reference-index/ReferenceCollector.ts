import { readdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";

import {
    createEmptyReferenceIndex,
    ReferenceIndex,
    uniqueSorted
} from "./types";

export class ReferenceCollector {

    public readonly index: ReferenceIndex =
        createEmptyReferenceIndex();

    constructor(
        public readonly root: string
    ) {}

    async collect(): Promise<void> {

        await this.collectMessages();
        await this.collectBusinessRules();
        await this.collectTechnicalRules();
        await this.collectPrinciples();
        await this.collectCodeLists();

    }

    //
    // ------------------------------------------------------------------------
    // Berichten
    // ------------------------------------------------------------------------
    //

    private async collectMessages(): Promise<void> {

        const folder = join(
            this.root,
            "bronnen",
            "berichten"
        );

        this.index.messages =
            await this.collectCodes(
                folder,
                /^JW\d+/i
            );

    }

    //
    // ------------------------------------------------------------------------
    // Bedrijfsregels
    // ------------------------------------------------------------------------
    //

    private async collectBusinessRules(): Promise<void> {

        const folder = join(
            this.root,
            "bronnen",
            "regels",
            "bedrijfsregels"
        );

        const values =
            await this.collectCodes(
                folder,
                /^OP\d+(?:x\d+)?/i
            );

        this.index.rules.push(...values);

        this.index.rules =
            uniqueSorted(this.index.rules);

    }

    //
    // ------------------------------------------------------------------------
    // Technische regels
    // ------------------------------------------------------------------------
    //

    private async collectTechnicalRules(): Promise<void> {

        const root = join(
            this.root,
            "bronnen",
            "regels",
            "technische-regels"
        );

        await this.walkRules(root);

        this.index.rules =
            uniqueSorted(this.index.rules);

    }

    //
    // ------------------------------------------------------------------------
    // Uitgangspunten
    // ------------------------------------------------------------------------
    //

    private async collectPrinciples(): Promise<void> {

        const folder = join(
            this.root,
            "bronnen",
            "regels",
            "uitgangspunten"
        );

        const values =
            await this.collectCodes(
                folder,
                /^UP\d+/i
            );

        this.index.rules.push(...values);

        this.index.rules =
            uniqueSorted(this.index.rules);

    }

    //
    // ------------------------------------------------------------------------
    // Codelijsten
    // ------------------------------------------------------------------------
    //

    private async collectCodeLists(): Promise<void> {

        const folder = join(
            this.root,
            "bronnen",
            "codelijsten"
        );

        const values =
            await this.collectCodes(
                folder,
                /^(?:COD|WJ|JZ|NUM|WMO|CBS|FO)\d+/i
            );

        this.index.codelists =
            uniqueSorted(values);

    }

    //
    // ------------------------------------------------------------------------
    // Helpers
    // ------------------------------------------------------------------------
    //

    private async walkRules(
        folder: string
    ): Promise<void> {

        const entries =
            await readdir(folder, {
                withFileTypes: true
            });

        for (const entry of entries) {

            const full =
                join(folder, entry.name);

            if (entry.isDirectory()) {

                await this.walkRules(full);

                continue;

            }

            const match =
                basename(
                    entry.name,
                    extname(entry.name)
                ).match(/^TR\d+/i);

            if (match) {

                this.index.rules.push(
                    match[0].toUpperCase()
                );

            }

        }

    }

    private async collectCodes(
        folder: string,
        regex: RegExp
    ): Promise<string[]> {

        const entries =
            await readdir(folder, {
                withFileTypes: true
            });

        const result = new Set<string>();

        for (const entry of entries) {

            if (entry.isDirectory()) {

                continue;

            }

            const match =
                basename(
                    entry.name,
                    extname(entry.name)
                ).match(regex);

            if (!match) {

                continue;

            }

            result.add(
                match[0].toUpperCase()
            );

        }

        return uniqueSorted(result);

    }

}