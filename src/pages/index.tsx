import { BookPage } from 'pages/BookPage';
import { MainPage } from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from 'widgets/header';

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path={'/books/:id'} element={<BookPage />} />
      </Route>
    </Routes>
  );
};
