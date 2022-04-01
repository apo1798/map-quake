import React from 'react';

import styles from './MainContainer.module.css';

const MainContainer = (props) => {
  return (
    <section className={styles['main-container']}>{props.children}</section>
  );
};

export default MainContainer;
