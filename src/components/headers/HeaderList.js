import React from 'react';

import styles from './HeaderList.module.css';

const HeaderList = () => {
  return (
    <div>
      <ul className={styles['header-list']}>
        <li>LINK 1</li>
        <li>LINK 2</li>
        <li>LINK 3</li>
      </ul>
    </div>
  );
};

export default HeaderList;
