import { booksActions } from 'entities/books';
import { booksFiltersActions } from 'entities/books-filters';
import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui';

export const PrevPageButton: FC = memo(() => {
  const navigate = useNavigate();
  const actions = useActionCreators(booksActions);
  const filtersActions = useActionCreators(booksFiltersActions);
  const handleClick = () => {
    navigate('/');
    actions.clearBooks();
    filtersActions.resetStartIndex();
  };

  return (
    <Button title={'To main page'} onClick={handleClick} />
  );
});
