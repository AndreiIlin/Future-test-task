import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { ISelectItem } from 'shared/ui/select/types';
import styles from './styles.module.scss';

interface SelectProps<T> {
  selectedValue: T;
  items: ISelectItem<T>[];
  selectFn: (value: T) => void;
}

export const Select: <T>(props: SelectProps<T>) => JSX.Element = ({ items, selectedValue, selectFn }) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find(item => item.value === selectedValue);

  const handleToggleSelect = () => {
    setOpen(open => !open);
  };

  const handleSelect = (value: Parameters<typeof selectFn>[0]) => () => {
    selectFn(value);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current || !selectRef.current) return;
      if (!menuRef.current.contains(event.target as Node) && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  const toggleClass = cn({
    [styles['Select-dropdown-toggle']]: true,
    [styles['Select-dropdown-toggle-opened']]: open,
  });

  return (
    <div
      ref={selectRef}
      tabIndex={0}
      aria-label={'select'}
      className={styles.Select}
    >
      <div className={styles['Select-dropdown']} onClick={handleToggleSelect}>
        <div className={styles['Select-dropdown-selected-item']}>
          {selectedItem?.name}
        </div>
        <svg
          className={toggleClass}
          xmlns="http://www.w3.org/2000/svg" width="18" height="18"
          viewBox="0 0 18 18" fill="none"
        >
          <path
            fillRule="evenodd" clipRule="evenodd"
            d="M4.41076 6.91073C4.7362 6.5853 5.26384 6.5853 5.58928 6.91073L10 11.3215L14.4108 6.91073C14.7362 6.5853 15.2638 6.5853 15.5893 6.91073C15.9147 7.23617 15.9147 7.76381 15.5893 8.08925L10.5893 13.0892C10.2638 13.4147 9.7362 13.4147 9.41076 13.0892L4.41076 8.08925C4.08533 7.76381 4.08533 7.23617 4.41076 6.91073Z"
            fill="rgb(97, 97, 97)"
          />
        </svg>
      </div>
      {open && <div
        className={styles['Select-dropdown-menu']}
        ref={menuRef}
      >
        {items.map(item => item.value === selectedValue ? null :
          <div
            onClick={handleSelect(item.value)}
            key={item.id}
            className={styles['Select-dropdown-item']}
          >{item.name}</div>)}
      </div>}
    </div>
  );
};
