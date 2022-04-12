import React from 'react';
import { useSelector } from 'react-redux';

import DateSetting from './DateSetting';
import Coords from './Coords';
import MagSetting from './MagSetting';

import styles from './Settings.module.css';
import CircleNotch from '../../UI/CircleNotch';

const Settings = () => {
  const isLoading = useSelector((state) => state.app.isLoading);

  return (
    <section className={styles.container}>
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
    </section>
  );
};

export default Settings;
