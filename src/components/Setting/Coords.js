import React, { useContext } from 'react';

import { DataContext } from '../../store/DataContext';

import styles from './Coords.module.css';
import { PersonSimpleWalk } from 'phosphor-react';

const Coords = () => {
  const { coordsLat, coordsLng, setCoordsLat, setCoordsLng } =
    useContext(DataContext);

  const latChangeHandler = (event) => {
    if (+event.target.value > 90 || +event.target.value < -90) return;
    setCoordsLat(event.target.value);
  };
  const lngChangeHandler = (event) => {
    if (+event.target.value > 180 || +event.target.value < -180) return;
    setCoordsLng(event.target.value);
  };

  return (
    <>
      <div className={styles.title}>
        <PersonSimpleWalk />
        <label htmlFor='lat'>移動到</label>
      </div>
      <div className={styles['coord-input']}>
        <label htmlFor='lat'>緯度(lat)</label>
        <input
          type='number'
          value={coordsLat}
          onChange={latChangeHandler}
          min='-90'
          max='90'
          step='any'
          id='lat'
          className={styles.lat}
        />
      </div>
      <div className={styles['coord-input']}>
        <label htmlFor='lng'>經度(lng)</label>
        <input
          type='number'
          value={coordsLng}
          onChange={lngChangeHandler}
          min='-180'
          max='180'
          step='any'
          id='lng'
        />
      </div>
    </>
  );
};

export default Coords;
