import React from 'react';
import { ReactComponent as Notch } from '../icons/circleNotch.svg';

import styles from './CircleNotch.module.css';

const CircleNotch = () => {
  return (
    <>
      <Notch className={styles['loadingNotch']} />
    </>
  );
};

export default CircleNotch;
