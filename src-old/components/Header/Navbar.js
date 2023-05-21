import React from 'react';
import NavLinks from './NavLinks';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
