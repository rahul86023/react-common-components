import React from 'react';
import styles from './Sidebar.module.css';

export interface SidebarProps {
  items?: string[];
  backgroundColor?: string;
}
const Sidebar: React.FC<SidebarProps> = ({ items = ['Home', 'About'], backgroundColor = '#f0f0f0' }) =>
  {
  return (
    <aside className={styles.sidebar} style={{ backgroundColor }}>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
