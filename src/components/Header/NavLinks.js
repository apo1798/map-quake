import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavLinks.module.css';

const NavLinks = (props) => {
  const mobileCloseMenuHandler = () => {
    if (!props.isMobile) return;
    props.closeMobileMenu();
  };
  return (
    <ul>
      <li>
        <Link
          to='/map-quake/'
          className={styles.link}
          onClick={mobileCloseMenuHandler}
        >
          地圖首頁
        </Link>
      </li>
      <li>
        <Link
          to='/map-quake/about'
          className={styles.link}
          onClick={mobileCloseMenuHandler}
        >
          介紹
        </Link>
      </li>
      <li>
        <a
          href='https://github.com/apo1798/map-quake'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
          onClick={mobileCloseMenuHandler}
        >
          原始碼
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
