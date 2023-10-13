import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from 'entities/books';
import { booksFiltersReducer } from 'entities/books-filters';

export const store = configureStore({
  reducer: {
    booksFilters: booksFiltersReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
