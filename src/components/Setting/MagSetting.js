import React, { useContext } from 'react';

import { DataContext } from '../../store/DataContext';

import styles from './MagSetting.module.css';
import { Faders } from 'phosphor-react';

const Coords = () => {
  const { mag, setMag } = useContext(DataContext);

  const magChangeHandler = (event) => {
    setMag(event.target.value);
    console.log(event.target.value);
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
          <option value='3' selected>
            3
          </option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
        </select>
      </div>
    </>
  );
};

export default Coords;
