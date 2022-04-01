import React, { useContext } from 'react';
// import { ReactComponent as LocationPin } from '../../icons/locationPin.svg';
import { ReactComponent as PersonWalking } from '../../icons/personWalking.svg';
import { DataContext } from '../../store/DataContext';

import styles from './Coords.module.css';

const Coords = () => {
  const { coordsLat, coordsLng, setCoordsLat, setCoordsLng } =
    useContext(DataContext);

  const latChangeHandler = (event) => {
    if (+event.target.value > 90) return;
    if (+event.target.value < -90) return;
    // TODO ERROR MODAL
    setCoordsLat(event.target.value);
  };
  const lngChangeHandler = (event) => {
    setCoordsLng(event.target.value);
  };

  return (
    <>
      <div className={styles.title}>
        {/* <LocationPin />  */}
        <PersonWalking />
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
