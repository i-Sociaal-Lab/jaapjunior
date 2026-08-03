import {
  KnowledgeObject,
  KnowledgeType,
  SourceFormat
} from "../model/KnowledgeObject.js";

import { ReferenceIndex } from "../../generated/reference-index.generated.js";

/**
 * Bouwt een uniforme lijst van KnowledgeObjects.
 * Nog geen relaties; alleen objecten.
 */
export class ObjectBuilder {

  private readonly objects = new Map<string, KnowledgeObject>();

  public build(referenceIndex: ReferenceIndex): KnowledgeObject[] {

    this.objects.clear();

    this.addCategory(referenceIndex.messages, KnowledgeType.Message);
    this.addCategory(referenceIndex.rules, KnowledgeType.Rule);
    this.addCategory(referenceIndex.codelists, KnowledgeType.CodeList);
    this.addCategory(referenceIndex.constraints, KnowledgeType.Constraint);
    this.addCategory(referenceIndex.concepts, KnowledgeType.Concept);
    this.addCategory(referenceIndex.xmlElements, KnowledgeType.XmlElement);

    this.addAliases(referenceIndex.aliases);

    return [...this.objects.values()];
  }

  private addCategory(
    ids: readonly string[],
    type: KnowledgeType
  ): void {

    for (const id of ids) {
      this.add(id, type);
    }
  }

  private add(id: string, type: KnowledgeType): void {

    if (this.objects.has(id)) {
      return;
    }

    const object: KnowledgeObject = {
      id,
      type,
      title: id,
      description: undefined,
      aliases: [],
      source: {
        path: "generated/reference-index.generated.ts",
        format: SourceFormat.Json
      },
      properties: [],
      references: [],
      metadata: {}
    };

    this.objects.set(id, object);
  }

  private addAliases(
    aliases: Record<string, readonly string[]>
  ): void {

    for (const [alias, ids] of Object.entries(aliases)) {

      for (const id of ids) {

        const object = this.objects.get(id);

        if (!object) {
          continue;
        }

        if (!object.aliases.includes(alias)) {
          object.aliases.push(alias);
        }
      }
    }
  }

  public get(id: string): KnowledgeObject | undefined {
    return this.objects.get(id);
  }

  public has(id: string): boolean {
    return this.objects.has(id);
  }

  public count(): number {
    return this.objects.size;
  }

  public countByType(type: KnowledgeType): number {

    let total = 0;

    for (const object of this.objects.values()) {
      if (object.type === type) {
        total++;
      }
    }

    return total;
  }
}
