import React, { useState } from 'react';
import NavLinks from './NavLinks';

import { List, XSquare } from 'phosphor-react';
import styles from './MobileNavbar.module.css';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const listClickHandler = () => {
    setOpen((state) => !state);
  };

  const closeMobileMenuHandler = () => {
    setOpen(false);
  };

  const listIcon = (
    <List
      size={32}
      className={styles['list-icon']}
      onClick={listClickHandler}
    />
  );

  const closeIcon = (
    <XSquare
      size={32}
      className={styles['list-icon']}
      onClick={listClickHandler}
    />
  );

  return (
    <nav className={styles['mobile-navbar']}>
      {open ? closeIcon : listIcon}
      {open && (
        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenuHandler} />
      )}
    </nav>
  );
};

export default MobileNavbar;
