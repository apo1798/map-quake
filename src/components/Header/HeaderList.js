import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderList.module.css';

const HeaderList = () => {
  return (
    <div>
      <ul className={styles['header-list']}>
        <li>
          <Link to='/map-quake/' className={styles.link}>
            地圖首頁
          </Link>
        </li>
        <li>
          <Link to='/map-quake/about' className={styles.link}>
            介紹
          </Link>
        </li>
        <li>
          <a
            href='https://github.com/apo1798/map-quake'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            原始碼
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderList;
