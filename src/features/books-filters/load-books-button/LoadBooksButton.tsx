import { booksFiltersActions } from 'entities/books-filters';
import React, { FC } from 'react';
import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui';

export const LoadBooksButton: FC = () => {
  const filtersActions = useActionCreators(booksFiltersActions);

  const handleClick = () => {
    filtersActions.loadMore();
  };

  return (
    <Button title={'Load more'} onClick={handleClick} />
  );
};
