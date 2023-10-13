import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button: FC<ButtonProps> = ({ title, ...props }) => {

  return (
    <button className={styles.Button} {...props}>{title}</button>
  );
};
