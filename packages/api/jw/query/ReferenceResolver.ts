import { referenceIndex } from "../generated/reference-index.generated.js";

export interface ResolveResult {
    zoektekst: string;
    gevonden: string[];
}

export class ReferenceResolver {

    resolve(vraag: string): ResolveResult {

        const gevonden = new Set<string>();

        const tekst = vraag.toLowerCase();

        for (const [alias, verwijzingen] of Object.entries(referenceIndex.aliases)) {

            if (!tekst.includes(alias)) {
                continue;
            }

            for (const verwijzing of verwijzingen) {
                gevonden.add(verwijzing);
            }
        }

        const zoektekst = [
            vraag,
            ...gevonden
        ].join(" ");

        return {
            zoektekst,
            gevonden: [...gevonden]
        };
    }
}