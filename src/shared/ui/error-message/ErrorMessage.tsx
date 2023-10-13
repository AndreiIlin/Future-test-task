import React, { FC } from 'react';
import styles from './styles.module.scss';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {

  return (
    <h3 className={styles.ErrorMessage}>{message}</h3>
  );
};
