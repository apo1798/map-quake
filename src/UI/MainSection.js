import React from 'react';

import Map from '../components/Map/Map';
import Settings from '../components/Setting/Settings';
import Info from '../components/Info/Info';

import { EarthquakeHttp } from '../http-request/EarthquakeHttp';

import styles from './MainSection.module.css';

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
          <Info />
        </section>
      </section>
    </>
  );
};

export default MainSection;
