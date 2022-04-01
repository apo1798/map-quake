import React, { useContext } from 'react';

import { ReactComponent as Filter } from '../../icons/filter.svg';
import { DataContext } from '../../store/DataContext';

import styles from './MagSetting.module.css';

const Coords = () => {
  const { mag, setMag } = useContext(DataContext);

  const magChangeHandler = (event) => {
    setMag(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className={styles.title}>
        <Filter />
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
};

export default Coords;
