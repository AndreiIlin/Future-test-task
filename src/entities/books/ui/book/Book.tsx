import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface BookProps {
  id: string;
  imageLink?: string;
  title: string;
  category?: string;
  authors?: string[];
}

export const Book: FC<BookProps> = ({ id, authors, category, title, imageLink }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/books/${id}`);
  };

  return (
    <div className={styles.Book} onClick={handleNavigate}>
      <div className={styles['Book-media']}>
        {imageLink ? <img className={styles['Book-img']} src={imageLink} alt={title} /> : null}
      </div>
      {category ? <p className={styles['Book-category']}>{category}</p> : null}
      <h3 className={styles['Book-title']}>{title}</h3>
      {authors && <p className={styles['Book-authors']}>{authors.join(', ')}</p>}
    </div>
  );
};
