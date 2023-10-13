import { getBookThunk } from 'entities/books';
import { BookLayout } from 'entities/books/ui/book-layout';
import { PrevPageButton } from 'features/books-filters';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { ErrorMessage, Loading, Wrapper } from 'shared/ui';

export const BookPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.books.book);
  const isLoading = useAppSelector(state => state.books.isLoading);
  const isError = useAppSelector(state => state.books.isError);

  useEffect(() => {
    if (!id) return;

    dispatch(getBookThunk({ id }));
  }, []);
  return (
    <main>
      <Wrapper>
        <PrevPageButton />
        {book && (
          <BookLayout
            title={book.volumeInfo.title}
            imageLink={book.volumeInfo.imageLinks?.thumbnail}
            description={book.volumeInfo.description}
            authors={book.volumeInfo.authors}
            categories={book.volumeInfo.categories}
          />
        )}
        {isLoading && <Loading />}
        {isError && <ErrorMessage message={'Oops – something went wrong Whatever happened, it was probably our fault. Please try again.'} />}
      </Wrapper>
    </main>
  );
};
