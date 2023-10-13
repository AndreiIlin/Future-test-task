import React, { FC } from 'react';
import styles from './styles.module.scss';

interface HeaderLayoutProps {
  children: React.ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = ({ children }) => {

  return (
    <header className={styles.HeaderLayout}>
      {children}
    </header>
  );
};
