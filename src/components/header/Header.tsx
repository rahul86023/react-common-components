import React from 'react';
import styles from './Header.module.css';

export interface HeaderProps {
  title?: string;
  backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = 'Default Header',
  backgroundColor = '#f5f5f5',
}) => {
  return (
    <header className={styles.header} style={{ backgroundColor }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

