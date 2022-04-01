import React, { useContext } from 'react';
import DateSetting from './DateSetting';
import Coords from './Coords';
import MagSetting from './MagSetting';

import styles from './Settings.module.css';
import CircleNotch from '../../UI/CircleNotch';

import { DataContext } from '../../store/DataContext';

const Settings = () => {
  const { isLoading } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>設定</span>
        <span className={styles['header-loading']}>
          {isLoading && <CircleNotch />}
        </span>
      </div>

      <ul>
        <li className={styles['setting-list']}>
          <DateSetting />
        </li>
        <li className={styles['setting-list']}>
          <Coords />
        </li>
        <li className={styles['setting-list']}>
          <MagSetting />
        </li>
      </ul>
    </div>
  );
};

export default Settings;
