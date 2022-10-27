import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  navLinkSelected,
  selectCurrentCalendarSpread,
} from '../../../reducers/appSettings';
import { useStyles } from './styles';

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);
  const setStyle = (calendar) => {
    if (currentCalendarSpread === calendar) return classes.selectedLink;
  };
  return (
    <nav>
      <ul className={classes.linkList}>
        <li
          className={setStyle('day')}
          onClick={(e) => dispatch(navLinkSelected('day'))}
        >
          Day
        </li>
        <li
          className={setStyle('week')}
          onClick={(e) => dispatch(navLinkSelected('week'))}
        >
          Week
        </li>
        <li
          className={setStyle('month')}
          onClick={(e) => dispatch(navLinkSelected('month'))}
        >
          Month
        </li>
        <li
          className={setStyle('year')}
          onClick={(e) => dispatch(navLinkSelected('year'))}
        >
          Year
        </li>
        <li
          className={setStyle('schedule')}
          onClick={(e) => dispatch(navLinkSelected('schedule'))}
        >
          Schedule
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
