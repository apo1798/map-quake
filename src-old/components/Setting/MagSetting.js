import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { magActions } from '../../store/mag-slice';

import styles from './MagSetting.module.css';
import { Faders } from 'phosphor-react';

const Coords = memo(() => {
  const mag = useSelector((state) => state.mag.magnitude);
  const dispatch = useDispatch();

  const magChangeHandler = (event) => {
    dispatch(magActions.changeMag(event.target.value));
  };

  return (
    <>
      <div className={styles.title}>
        <Faders />
        <label htmlFor='mag'>震度</label>
      </div>
      <div className={styles['mag-input']}>
        <label htmlFor='mag'>最小震度</label>
        <select type='number' onChange={magChangeHandler} value={mag} id='mag'>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
        </select>
      </div>
    </>
  );
});

export default Coords;
