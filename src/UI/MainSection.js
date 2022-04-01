import React from 'react';

import Map from '../components/Map/Map';
import Settings from '../components/side-options/Settings';

import { EarthquakeHttp } from '../http-request/EarthquakeHttp';

import styles from './Layout.module.css';

const MainSection = () => {
  EarthquakeHttp();

  return (
    <>
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

export default MainSection;
