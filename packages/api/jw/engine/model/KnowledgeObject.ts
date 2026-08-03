/**
 * ============================================================
 * JaapJunior Engine
 * KnowledgeObject
 * ============================================================
 *
 * Centrale datamodel voor alle kennisobjecten.
 */

export enum KnowledgeType {
  Message = "message",
  Rule = "rule",
  Instruction = "instruction",
  Constraint = "constraint",
  CodeList = "codelist",
  Concept = "concept",
  XmlElement = "xmlElement",
  Law = "law",
  Flow = "flow",
  Guide = "guide",
  Faq = "faq",
  Case = "case",
  Unknown = "unknown",
}

export enum SourceFormat {
  Markdown = "markdown",
  Xml = "xml",
  Json = "json",
  Text = "text",
  Other = "other",
}

export interface SourceInfo {
  path: string;
  format: SourceFormat;
  modified?: string;
}

export interface KnowledgeProperty {
  name: string;
  value: string;
}

export interface KnowledgeReference {
  target: string;
  relation: string;
  confidence?: number;
}

export interface KnowledgeObject {
  id: string;
  type: KnowledgeType;
  title: string;
  description?: string;
  aliases: string[];
  source: SourceInfo;
  properties: KnowledgeProperty[];
  references: KnowledgeReference[];
  metadata?: Record<string, string>;
}
