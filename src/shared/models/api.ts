import axios from 'axios';

export const booksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: import.meta.env.VITE_API_KEY,
  }
})
