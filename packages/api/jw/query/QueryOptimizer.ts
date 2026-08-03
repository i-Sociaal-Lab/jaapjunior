import { FieldResolver } from "./FieldResolver";

export interface OptimizedQuery {
  originalQuestion: string;
  searchText: string;
  searchTerms: string[];
  detectedFields: string[];
}

export class QueryOptimizer {
  private readonly fieldResolver = new FieldResolver();

  optimize(question: string): OptimizedQuery {
    const searchTerms = this.fieldResolver.buildSearchTerms(question);
    const fields = this.fieldResolver.resolve(question);

    return {
      originalQuestion: question,
      searchText: searchTerms.join(" "),
      searchTerms,
      detectedFields: fields.map(f => f.field.id)
    };
  }
}
