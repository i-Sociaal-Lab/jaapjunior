import { KnowledgeObject, KnowledgeType } from "./KnowledgeObject.js";

/**
 * Centrale runtime-opslag voor alle KnowledgeObjects.
 *
 * De KnowledgeStore bevat uitsluitend in-memory logica.
 * Hij leest geen bestanden; de KnowledgeBuilder vult de store.
 */
export class KnowledgeStore {

  private readonly objects = new Map<string, KnowledgeObject>();

  add(object: KnowledgeObject): void {
    this.objects.set(object.id, object);
  }

  addMany(objects: KnowledgeObject[]): void {
    for (const object of objects) {
      this.add(object);
    }
  }

  clear(): void {
    this.objects.clear();
  }

  size(): number {
    return this.objects.size;
  }

  getAll(): KnowledgeObject[] {
    return [...this.objects.values()];
  }

  getById(id: string): KnowledgeObject | undefined {
    return this.objects.get(id);
  }

  has(id: string): boolean {
    return this.objects.has(id);
  }

  findByType(type: KnowledgeType): KnowledgeObject[] {
    return this.getAll().filter((o: KnowledgeObject) => o.type === type);
  }

  findByAlias(alias: string): KnowledgeObject[] {
    const search = alias.trim().toLowerCase();

    return this.getAll().filter((o: KnowledgeObject) =>
      o.aliases.some((a: string) => a.toLowerCase() === search)
    );
  }

  findByTitle(text: string): KnowledgeObject[] {
    const search = text.trim().toLowerCase();

    return this.getAll().filter((o: KnowledgeObject) =>
      o.title.toLowerCase().includes(search)
    );
  }

  search(text: string): KnowledgeObject[] {
    const search = text.trim().toLowerCase();

    return this.getAll().filter((o: KnowledgeObject) =>
      o.id.toLowerCase().includes(search) ||
      o.title.toLowerCase().includes(search) ||
      o.aliases.some((a: string) => a.toLowerCase().includes(search))
    );
  }

  /**
   * Geeft alle objecten terug waarnaar dit object verwijst.
   */
  findRelated(id: string): KnowledgeObject[] {
    const source = this.getById(id);

    if (!source) {
      return [];
    }

    return source.references
      .map((r) => this.getById(r.target))
      .filter((o): o is KnowledgeObject => o !== undefined);
  }

  /**
   * Geeft alle objecten terug die naar dit object verwijzen.
   */
  findIncoming(id: string): KnowledgeObject[] {
    return this.getAll().filter((o: KnowledgeObject) =>
      o.references.some((r) => r.target === id)
    );
  }
}
