import { createSlice } from '@reduxjs/toolkit';
import { getBooksThunk, getBookThunk, IBooksInitialState } from 'entities/books';

const initialState: IBooksInitialState = {
  books: [],
  book: null,
  isError: false,
  isLoading: false,
  totalItems: 0,
};

const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    clearBooks: state => {
      state.books = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getBooksThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.totalItems = 0;
    })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(...action.payload.items);
        state.totalItems = action.payload.totalItems;
      })
      .addCase(getBooksThunk.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getBookThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.book = null;
      })
      .addCase(getBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addCase(getBookThunk.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { actions: booksActions, reducer: booksReducer } = booksSlice;
