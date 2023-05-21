import React from 'react';

import styles from './CenterContainer.module.css';

const CenterContainer = (props) => {
  return (
    <section className={styles['main-container']}>{props.children}</section>
  );
};

export default CenterContainer;
