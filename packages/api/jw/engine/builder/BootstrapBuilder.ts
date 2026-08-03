import { referenceIndex } from "../../generated/reference-index.generated.js";

import { ObjectBuilder } from "./ObjectBuilder.js";
import { KnowledgeStore } from "../model/KnowledgeStore.js";

/**
 * BootstrapBuilder
 *
 * Tijdelijke bootstrap van de JaapJunior Engine.
 *
 * Deze klasse bouwt een volledige KnowledgeStore op vanuit de
 * bestaande ReferenceIndex. Later wordt alleen de bron vervangen
 * (KnowledgeBuilder), de runtime hoeft dan niet te wijzigen.
 */
export class BootstrapBuilder {

    public static build(): KnowledgeStore {

        const objectBuilder = new ObjectBuilder();

        const objects = objectBuilder.build(referenceIndex);

        const store = new KnowledgeStore();

        store.addMany(objects);

        console.log("");
        console.log("==================================");
        console.log(" JaapJunior Knowledge Engine");
        console.log("==================================");
        console.log(`KnowledgeObjects : ${store.size()}`);
        console.log("Status           : OK");
        console.log("");

        return store;
    }

}
