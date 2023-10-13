import { TBooksCategories, TBooksOrder } from 'entities/books-filters';
import { ISelectItem } from 'shared/ui/select/types';

export const orderSelectItems: ISelectItem<TBooksOrder>[] = [
  {
    id: 1,
    name: 'relevance',
    value: 'relevance',
  },
  {
    id: 2,
    name: 'newest',
    value: 'newest',
  },
];
export const categoriesSelectItems: ISelectItem<TBooksCategories>[] = [
  {
    id: 1,
    name: 'all',
    value: '',
  },
  {
    id: 2,
    name: 'art',
    value: 'art',
  },
  {
    id: 3,
    name: 'biography',
    value: 'biography',
  },
  {
    id: 4,
    name: 'computers',
    value: 'computers',
  },
  {
    id: 5,
    name: 'history',
    value: 'history',
  },
  {
    id: 6,
    name: 'medical',
    value: 'medical',
  },
  {
    id: 7,
    name: 'poetry',
    value: 'poetry',
  },
]
