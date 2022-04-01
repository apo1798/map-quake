import React from 'react';
import HeaderList from './HeaderList';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { MapTrifold } from 'phosphor-react';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles['header-link']} to='/map-quake/'>
        <MapTrifold size={32} />
        <h1>MapQuake 地震地圖</h1>
      </Link>
      <HeaderList />
    </header>
  );
};

export default Header;
