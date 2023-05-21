import React from 'react';
import HeaderLink from './HeaderLink';

import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLink />
      <Navbar />
      <MobileNavbar />
    </header>
  );
};

export default Header;
