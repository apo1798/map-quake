import React from 'react';

import styles from './MapLoading.module.css';

const MapLoading = () => {
  return (
    <>
      <p className={styles['loading-text']}>地圖載入中......</p>
    </>
  );
};

export default MapLoading;
