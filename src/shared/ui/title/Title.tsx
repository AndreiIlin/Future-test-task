import React, { FC } from 'react';
import styles from './styles.module.scss';

interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {

  return (
    <h2 className={styles.Title}>{title}</h2>
  );
};
