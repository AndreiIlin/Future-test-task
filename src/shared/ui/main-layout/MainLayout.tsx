import React, { FC, memo } from 'react';
import styles from './styles.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = memo(({ children }) => {

  return (
    <div className={styles.MainLayout}>
      {children}
    </div>
  );
});
