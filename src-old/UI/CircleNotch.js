import React from 'react';

import styles from './CircleNotch.module.css';
import { CircleNotch } from 'phosphor-react';

const LoadingCircleNotch = () => {
  return (
    <>
      <CircleNotch className={styles['loadingNotch']} />
    </>
  );
};

export default LoadingCircleNotch;
