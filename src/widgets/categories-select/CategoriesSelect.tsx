import { booksActions } from 'entities/books';
import { booksFiltersActions, categoriesSelectItems, TBooksCategories } from 'entities/books-filters';
import React, { FC, memo } from 'react';
import { useActionCreators, useAppSelector } from 'shared/hooks';
import { Select } from 'shared/ui';

export const CategoriesSelect: FC = memo(() => {
  const selectedCategoryItem = useAppSelector(state => state.booksFilters.category);
  const filterActions = useActionCreators(booksFiltersActions);
  const actions = useActionCreators(booksActions);
  const handleSelectOrder = (value: TBooksCategories) => {
    filterActions.setCategory(value);
    actions.clearBooks();
  };
  return (
    <Select selectFn={handleSelectOrder} selectedValue={selectedCategoryItem} items={categoriesSelectItems} />
  );
});
