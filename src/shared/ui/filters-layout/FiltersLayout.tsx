import React, { FC, memo } from 'react';
import styles from './styles.module.scss';

interface FiltersLayoutProps {
  children: React.ReactNode;
}

export const FiltersLayout: FC<FiltersLayoutProps> = memo(({ children }) => {

  return (
    <div className={styles.FiltersLayout}>
      {children}
    </div>
  );
});
