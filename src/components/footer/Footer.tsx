import React from 'react';
import styles from './Footer.module.css';

export interface FooterProps {
  text?: string;
  backgroundColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  text = 'Default Footer',
  backgroundColor = '#e0e0e0',
}) => {
  return (
    <footer className={styles.footer} style={{ backgroundColor }}>
      <p>{text}</p>
    </footer>
  );
};

export default Footer;

