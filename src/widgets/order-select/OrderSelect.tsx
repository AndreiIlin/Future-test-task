import { booksActions } from 'entities/books';
import { booksFiltersActions, orderSelectItems, TBooksOrder } from 'entities/books-filters';
import React, { FC, memo } from 'react';
import { useActionCreators, useAppSelector } from 'shared/hooks';
import { Select } from 'shared/ui';

export const OrderSelect: FC = memo(() => {
  const selectedOrderItem = useAppSelector(state => state.booksFilters.order);
  const filterActions = useActionCreators(booksFiltersActions);
  const actions = useActionCreators(booksActions);
  const handleSelectOrder = (value: TBooksOrder) => {
    filterActions.setOrder(value);
    actions.clearBooks();
  };
  return (
    <Select selectedValue={selectedOrderItem} items={orderSelectItems} selectFn={handleSelectOrder} />
  );
});
