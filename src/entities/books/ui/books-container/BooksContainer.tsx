import { Book, IBook } from 'entities/books';
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface BooksContainerProps {
  books: IBook[];
}

export const BooksContainer: FC<BooksContainerProps> = ({ books }) => {

  return (
    <div className={styles.BooksContainer}>
      {books.map(book => (
        <Book
          authors={book.volumeInfo.authors}
          id={book.id}
          imageLink={book.volumeInfo.imageLinks?.thumbnail}
          title={book.volumeInfo.title}
          category={book.volumeInfo.categories?.[0]}
          key={book.id}
        />
      ))}
    </div>
  );
};
