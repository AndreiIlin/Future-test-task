import React, { FC, memo } from 'react';
import styles from './styles.module.scss';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: FC<WrapperProps> = memo(({ children }) => {

  return (
    <div className={styles.Wrapper}>
      {children}
    </div>
  );
});
