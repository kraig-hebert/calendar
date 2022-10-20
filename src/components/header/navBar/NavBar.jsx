import React from 'react';
import { useStyles } from './styles';

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav>
      <ul className={classes.linkList}>
        <li>Day</li>
        <li>Week</li>
        <li>Month</li>
        <li>Year</li>
        <li>Schedule</li>
      </ul>
    </nav>
  );
};

export default NavBar;
