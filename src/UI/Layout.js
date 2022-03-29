import React from 'react';

import Header from '../components/headers/Header';
import Map from '../components/Map/Map';
import Settings from '../components/side-options/Settings';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <section className={styles['main-container']}>
        <div className={styles['map-container']}>
          <Map />
        </div>
        <section className={styles['options-container']}>
          <Settings></Settings>
          <div>asd</div>
        </section>
      </section>
    </>
  );
};

export default Layout;
