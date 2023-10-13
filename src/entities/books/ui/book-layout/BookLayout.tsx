import React, { FC } from 'react';
import styles from './styles.module.scss';

interface BookLayoutProps {
  authors?: string[];
  title: string;
  imageLink?: string;
  description?: string;
  categories?: string[];
}

export const BookLayout: FC<BookLayoutProps> = ({ description, categories, title, imageLink, authors }) => {

  return (
    <div className={styles.BookLayout}>
      <div className={styles['BookLayout-media']}>
        {imageLink && <img className={styles['BookLayout-image']} src={imageLink} alt={title} />}
      </div>
      <div className={styles['BookLayout-content']}>
        {categories && <p className={styles['BookLayout-categories']}>{categories.join('/')}</p>}
        <h2 className={styles['BookLayout-title']}>{title}</h2>
        {authors && <p className={styles['BookLayout-authors']}>{authors.join(', ')}</p>}
        {description && <div className={styles['BookLayout-description']}>{description}</div>}
      </div>
    </div>
  );
};
