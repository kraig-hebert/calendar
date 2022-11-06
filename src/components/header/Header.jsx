import React from 'react';
import { useStyles } from './styles';
import { FaCalendarPlus } from 'react-icons/fa';
import NavBar from './navBar/NavBar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mainHeaderButtonClicked } from '../../reducers/appSettings';

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <div>
        <Link
          to="/"
          onClick={dispatch(mainHeaderButtonClicked(new Date().toJSON()))}
        >
          <span>Calendar</span>
        </Link>
      </div>
      <NavBar />
      <div>
        <FaCalendarPlus className={classes.plusIcon} />
      </div>
    </header>
  );
};

export default Header;
