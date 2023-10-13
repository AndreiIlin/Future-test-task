export type TBooksOrder = 'relevance' | 'newest';
export type TBooksCategories = '' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'

export interface IBooksFiltersInitialState {
  search: string;
  order: TBooksOrder;
  category: TBooksCategories;
  startIndex: number;
}
