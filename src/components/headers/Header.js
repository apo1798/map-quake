import React from 'react';
import HeaderList from './HeaderList';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>MapQuake 地震地圖</h1>
      <HeaderList />
    </header>
  );
};

export default Header;
