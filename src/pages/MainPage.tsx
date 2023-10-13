import { BooksContainer } from 'entities/books';
import { getBooksThunk } from 'entities/books/model/thunks';
import { LoadBooksButton } from 'features/books-filters';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { ErrorMessage, FiltersLayout, Loading, MainLayout, Wrapper } from 'shared/ui';
import { Title } from 'shared/ui/title';
import { CategoriesSelect } from 'widgets/categories-select';
import { OrderSelect } from 'widgets/order-select';

const PAGINATION_STEP = 30;

export const MainPage = () => {
  const search = useAppSelector(state => state.booksFilters.search);
  const order = useAppSelector(state => state.booksFilters.order);
  const category = useAppSelector(state => state.booksFilters.category);
  const startIndex = useAppSelector(state => state.booksFilters.startIndex);
  const books = useAppSelector(state => state.books.books);
  const totalItems = useAppSelector(state => state.books.totalItems);
  const isLoading = useAppSelector(state => state.books.isLoading);
  const isError = useAppSelector(state => state.books.isError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksThunk({
      search,
      category,
      startIndex,
      order,
    }));
  }, [search, category, startIndex, order]);

  return (
    <MainLayout>
      <Wrapper>
        <FiltersLayout>
          <OrderSelect />
          <CategoriesSelect />
        </FiltersLayout>
        <Title title={`Found ${totalItems} results`} />
        {books && books.length > 0 ?
          <>
            <BooksContainer books={books} />
            {books.length + PAGINATION_STEP < totalItems && <LoadBooksButton />}
          </> : null
        }
        {isLoading && <Loading />}
        {isError && <ErrorMessage message={'Oops – something went wrong Whatever happened, it was probably our fault. Please try again.'} />}
      </Wrapper>
    </MainLayout>
  );
};
