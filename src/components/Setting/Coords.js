import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { coordsActions } from '../../store/coords-slice';

import styles from './Coords.module.css';
import { PersonSimpleWalk } from 'phosphor-react';

const Coords = () => {
  const coordsLat = useSelector((state) => state.coords.lat);
  const coordsLng = useSelector((state) => state.coords.lng);
  const dispatch = useDispatch();

  const latChangeHandler = (event) => {
    if (+event.target.value > 90 || +event.target.value < -90) return;
    dispatch(coordsActions.changeLat(+event.target.value));
  };
  const lngChangeHandler = (event) => {
    if (+event.target.value > 180 || +event.target.value < -180) return;
    dispatch(coordsActions.changeLng(+event.target.value));
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
