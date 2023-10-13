import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBooksFiltersInitialState, TBooksCategories, TBooksOrder } from 'entities/books-filters';

const initialState: IBooksFiltersInitialState = {
  category: '',
  search: 'js',
  order: 'relevance',
  startIndex: 0,
};

const booksFiltersSlice = createSlice({
  name: 'booksFiltersSlice',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.startIndex = 0;
    },
    setOrder: (state, action: PayloadAction<TBooksOrder>) => {
      state.order = action.payload;
      state.startIndex = 0;
    },
    setCategory: (state, action: PayloadAction<TBooksCategories>) => {
      state.category = action.payload;
      state.startIndex = 0;
    },
    loadMore: state => {
      state.startIndex += 30;
    },
    resetStartIndex: state => {
      state.startIndex = 0;
    },
    resetFilters: state => {
      state.order = initialState.order;
      state.category = initialState.category;
    }
  },
});

export const { actions: booksFiltersActions, reducer: booksFiltersReducer } = booksFiltersSlice;
