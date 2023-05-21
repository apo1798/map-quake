import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Error.module.css';

const Error = () => {
  return (
    <section className={styles.message}>
      這個網頁不存在{'>'}_{'<'}。
      <Link to='/map-quake/' className={styles.link}>
        回到首頁
      </Link>
    </section>
  );
};

export default Error;
