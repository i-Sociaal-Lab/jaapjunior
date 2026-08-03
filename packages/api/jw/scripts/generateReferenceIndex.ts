#!/usr/bin/env bun

import { join } from "node:path";

import { ReferenceCollector } from "./reference-index/ReferenceCollector";
import { ConceptCollector } from "./reference-index/ConceptCollector";
import { ConstraintCollector } from "./reference-index/ConstraintCollector";
import { XmlElementCollector } from "./reference-index/XmlElementCollector";
import { AliasGenerator } from "./reference-index/AliasGenerator";
import { ReferenceWriter } from "./reference-index/ReferenceWriter";

export async function generateReferenceIndex(): Promise<void> {

    const root = join(
        process.cwd(),
        "jw"
    );

    console.log("ReferenceIndex");
    console.log("");

    //
    // Basisreferenties
    //

    const collector = new ReferenceCollector(root);

    await collector.collect();

    //
    // Begrippen
    //

    const conceptCollector =
        new ConceptCollector(collector);

    await conceptCollector.collect();

    //
    // Constraints
    //

    const constraintCollector =
        new ConstraintCollector(collector);

    await constraintCollector.collect();

    //
    // XML-elementen
    //

    const xmlCollector =
        new XmlElementCollector(collector);

    await xmlCollector.collect();

    //
    // Aliassen
    //

    const aliasGenerator =
        new AliasGenerator(collector);

    aliasGenerator.generate();

    //
    // Wegschrijven
    //

    const writer =
        new ReferenceWriter(root);

    await writer.write(
        collector.index
    );

    //
    // Statistieken
    //

    console.log("ReferenceIndex voltooid");
    console.log("");

    console.log(
        `Berichten     : ${collector.index.messages.length}`
    );

    console.log(
        `Regels        : ${collector.index.rules.length}`
    );

    console.log(
        `Codelijsten   : ${collector.index.codelists.length}`
    );

    console.log(
        `Constraints   : ${collector.index.constraints.length}`
    );

    console.log(
        `Begrippen     : ${collector.index.concepts.length}`
    );

    console.log(
        `XML-elementen : ${collector.index.xmlElements.length}`
    );

    console.log(
        `Aliassen      : ${Object.keys(collector.index.aliases).length}`
    );

}