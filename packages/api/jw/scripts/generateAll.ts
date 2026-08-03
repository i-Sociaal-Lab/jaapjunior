#!/usr/bin/env bun

import { generateFieldMap } from "./generateFieldMap";
import { generateKnowledgeMap } from "./generateKnowledgeMap";
import { generateReferenceIndex } from "./generateReferenceIndex";

async function main() {

    console.log("==================================");
    console.log(" JaapJunior iJw Generator");
    console.log("==================================");

    await generateFieldMap();
    await generateKnowledgeMap();
	await generateReferenceIndex();

    console.log("Klaar.");

}

main().catch(err => {
    console.error(err);
    process.exit(1);
});