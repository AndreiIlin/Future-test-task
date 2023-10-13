import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IBook, IGetBookRequest, IGetBooksRequest, IGetBooksResponse } from 'entities/books';
import { booksApi } from 'shared/models';

export const getBooksThunk = createAsyncThunk(
  'books/getBooks',
  async ({ search, category, order, startIndex }: IGetBooksRequest) => {
    const response = await booksApi.get<AxiosRequestConfig<IGetBooksRequest>, AxiosResponse<IGetBooksResponse>>('volumes', {
      params: {
        q: `${search} + subject:${category}`,
        maxResults: 30,
        orderBy: order,
        startIndex,
      },
    });

    return response.data;
  },
);

export const getBookThunk = createAsyncThunk(
  'books/getBook',
  async ({ id }: IGetBookRequest) => {
    const response = await booksApi.get<AxiosRequestConfig<IGetBookRequest>, AxiosResponse<IBook>>(`volumes/${id}`);
    return response.data;
  },
);
