import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { MapTrifold } from 'phosphor-react';

const HeaderLink = () => {
  return (
    <Link className={styles['header-link']} to='/map-quake/'>
      <MapTrifold size={32} />
      <h1>MapQuake 地震地圖</h1>
    </Link>
  );
};

export default HeaderLink;
