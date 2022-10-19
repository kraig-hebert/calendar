import React from 'react';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>Test</nav>
    </header>
  );
};

export default Header;
