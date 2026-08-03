import { ParserFactory } from "../parsers/ParserFactory";
import {
    createEmptyReferenceIndex,
    ReferenceDocument,
    ReferenceIndex
} from "./types";

export class GeneratorContext {

    /**
     * Root van de jw-map.
     */
    public readonly root: string;

    /**
     * Gedeelde parser factory.
     */
    public readonly factory = new ParserFactory();

    /**
     * Alle ingelezen documenten.
     */
    public readonly documents: ReferenceDocument[] = [];

    /**
     * De uiteindelijke ReferenceIndex.
     */
    public readonly index: ReferenceIndex =
        createEmptyReferenceIndex();

    constructor(root: string) {

        this.root = root;

    }

}