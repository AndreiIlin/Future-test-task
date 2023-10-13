import { booksActions } from 'entities/books';
import { booksFiltersActions } from 'entities/books-filters';
import { useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useActionCreators, useAppSelector } from 'shared/hooks';
import { HeaderLayout, SearchField, Wrapper } from 'shared/ui';

const BASE_URL = '/';
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const filtersActions = useActionCreators(booksFiltersActions);
  const actions = useActionCreators(booksActions);

  const searchValue = useAppSelector(state => state.booksFilters.search);

  const handleSubmit = useCallback((value: string) => {
    filtersActions.setSearch(value);
    actions.clearBooks();
    if (location.pathname !== BASE_URL) {
      filtersActions.resetFilters();
      navigate('/');
    }
  }, []);

  return (
    <>
      <HeaderLayout>
        <Wrapper>
          <SearchField
            required submitFn={handleSubmit} name={'search'} label={'Search for books'} initialValue={searchValue}
          />
        </Wrapper>
      </HeaderLayout>
      <Outlet />
    </>
  );
};
