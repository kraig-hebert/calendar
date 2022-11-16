import React from 'react';
import { useStyles } from './styles';
import { FaCalendarPlus } from 'react-icons/fa';
import NavBar from './navBar/NavBar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mainHeaderButtonClicked } from '../../reducers/appSettings';
import { addEventButtonClicked } from '../../reducers/appSettings';

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <div>
        <span>Calendar</span>
      </div>
      <NavBar />
      <div>
        <FaCalendarPlus
          className={classes.plusIcon}
          onClick={(e) => dispatch(addEventButtonClicked())}
        />
      </div>
    </header>
  );
};

export default Header;
