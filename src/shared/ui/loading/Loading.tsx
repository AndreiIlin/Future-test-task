import React from 'react';
import styles from './styles.module.scss';

export const Loading = () => {
  console.log('loading');

  return (
    <div className={styles.Loading}>
      <div className={styles['Loading-spinner']}></div>
      <p className={styles['Loading-text']}>Loading...</p>
    </div>
  );
};
