import { BootstrapBuilder } from "../builder/BootstrapBuilder.js";
import { KnowledgeStore } from "../model/KnowledgeStore.js";
import { KnowledgeObject, KnowledgeType } from "../model/KnowledgeObject.js";

/**
 * Facade van de JaapJunior Knowledge Engine.
 *
 * De runtime gebruikt uitsluitend deze klasse.
 * De interne implementatie (BootstrapBuilder, toekomstige
 * KnowledgeBuilder, parsers, graph, etc.) blijft verborgen.
 */
export class KnowledgeEngine {

    private static instance: KnowledgeEngine | undefined;

    private readonly store: KnowledgeStore;

    private constructor(store: KnowledgeStore) {
        this.store = store;
    }

    /**
     * Initialiseert de engine.
     * Voorlopig gebeurt dit vanuit de bestaande ReferenceIndex.
     * Later wordt dit vervangen door de nieuwe KnowledgeBuilder.
     */
    public static initialize(): KnowledgeEngine {

        if (!this.instance) {

            const store = BootstrapBuilder.build();

            this.instance = new KnowledgeEngine(store);
        }

        return this.instance;
    }

    public size(): number {
        return this.store.size();
    }

    public getById(id: string): KnowledgeObject | undefined {
        return this.store.getById(id);
    }

    public has(id: string): boolean {
        return this.store.has(id);
    }

    public findByAlias(alias: string): KnowledgeObject[] {
        return this.store.findByAlias(alias);
    }

    public findByTitle(text: string): KnowledgeObject[] {
        return this.store.findByTitle(text);
    }

    public search(text: string): KnowledgeObject[] {
        return this.store.search(text);
    }

    public findByType(type: KnowledgeType): KnowledgeObject[] {
        return this.store.findByType(type);
    }

    public findRelated(id: string): KnowledgeObject[] {
        return this.store.findRelated(id);
    }

    public findIncoming(id: string): KnowledgeObject[] {
        return this.store.findIncoming(id);
    }

    public getAll(): KnowledgeObject[] {
        return this.store.getAll();
    }

    /**
     * Alleen bedoeld voor tests en toekomstige builders.
     */
    public getStore(): KnowledgeStore {
        return this.store;
    }
}
