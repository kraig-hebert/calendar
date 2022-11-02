import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  navLinkSelected,
  selectCurrentCalendarSpread,
} from '../../../reducers/appSettings';
import { useStyles } from './styles';

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);
  const setStyle = (calendar) =>
    currentCalendarSpread === calendar ? classes.selectedLink : undefined;

  const handleLinkClick = (e, route) => {
    dispatch(navLinkSelected(route));
    navigate(`/${route}`);
  };
  return (
    <nav>
      <ul className={classes.linkList}>
        <li
          className={setStyle('day')}
          onClick={(e) => handleLinkClick(e, 'day')}
        >
          Day
        </li>
        <li
          className={setStyle('week')}
          onClick={(e) => handleLinkClick(e, 'week')}
        >
          Week
        </li>
        <li
          className={setStyle('month')}
          onClick={(e) => handleLinkClick(e, 'month')}
        >
          Month
        </li>
        <li
          className={setStyle('year')}
          onClick={(e) => handleLinkClick(e, 'year')}
        >
          Year
        </li>
        <li
          className={setStyle('schedule')}
          onClick={(e) => handleLinkClick(e, 'schedule')}
        >
          Schedule
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
