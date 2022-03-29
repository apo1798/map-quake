import React from 'react';
import DateSetting from './DateSetting';
import styles from './Settings.module.css';

// import { ReactComponent as Gear } from '../../icons/gear.svg';
import { ReactComponent as Filter } from '../../icons/filter.svg';
import MoveTo from './Coords';

const Settings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>設定</div>
      <ul>
        <li className={styles['setting-list']}>
          <DateSetting />
        </li>
        <li className={styles['setting-list']}>
          <MoveTo />
        </li>
        <li className={styles['setting-list']}>
          <Filter />
          震度
        </li>
      </ul>
    </div>
  );
};

export default Settings;
