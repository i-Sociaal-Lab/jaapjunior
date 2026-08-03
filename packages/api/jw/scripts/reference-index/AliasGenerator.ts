import { ReferenceCollector } from "./ReferenceCollector";

export class AliasGenerator {

    constructor(
        private readonly collector: ReferenceCollector
    ) {}

    generate(): void {

        const aliases: Record<string, string[]> = {};

        const add = (alias: string, ...targets: string[]) => {

            const key = alias.trim().toLowerCase();

            if (!key) {
                return;
            }

            if (!aliases[key]) {
                aliases[key] = [];
            }

            for (const target of targets) {

                if (!aliases[key].includes(target)) {
                    aliases[key].push(target);
                }

            }

        };

        //
        // Veelgebruikte aliassen
        //

        add("toewijzing", "JW301");
        add("toewijzingsbericht", "JW301");

        add("start", "JW305");
        add("startbericht", "JW305");
        add("start jeugdhulp", "JW305");

        add("stop", "JW307");
        add("stopbericht", "JW307");
        add("einde jeugdhulp", "JW307");

        add("vot", "JW315");
        add("verzoek om toewijzing", "JW315");

        add("vow", "JW317");
        add("verzoek om wijziging", "JW317");

        add("antwoordbericht", "JW319");

        add("declaratie", "JW323");
        add("declaratiebericht", "JW323");
        add("factuur", "JW323");

        //
        // Alle gevonden berichten
        //

        for (const message of this.collector.index.messages) {
            add(message, message);
        }

        //
        // Alle gevonden regels
        //

        for (const rule of this.collector.index.rules) {
            add(rule, rule);
        }

        //
        // Alle gevonden codelijsten
        //

        for (const code of this.collector.index.codelists) {
            add(code, code);
        }

        //
        // Alle gevonden constraints
        //

        for (const constraint of this.collector.index.constraints) {
            add(constraint, constraint);
        }

        this.collector.index.aliases = aliases;

    }

}