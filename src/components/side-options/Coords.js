import React, { useContext } from 'react';
import { ReactComponent as LocationPin } from '../../icons/locationPin.svg';
import { DataContext } from '../../store/DataContext';

import styles from './Coords.module.css';

const MoveTo = () => {
  const { lat, setLat, lng, setLng } = useContext(DataContext);

  const latChangeHandler = (event) => {
    setLat(event.target.value);
  };
  const lngChangeHandler = (event) => {
    setLng(event.target.value);
  };

  return (
    <>
      <div className={styles.title}>
        <LocationPin /> <label htmlFor='lat'>移動到</label>
      </div>
      <div className={styles['coord-input']}>
        <label htmlFor='lat'>緯度(lat)</label>
        <input
          type='number'
          value={lat}
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
          value={lng}
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

export default MoveTo;
