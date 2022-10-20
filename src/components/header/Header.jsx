import React from 'react';
import { useStyles } from './styles';
import { FaCalendarPlus } from 'react-icons/fa';
import NavBar from './navBar/NavBar';

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <span>Calendar</span>
      </div>
      <NavBar />
      <div>
        <FaCalendarPlus className={classes.plusIcon} />
      </div>
    </header>
  );
};

export default Header;
