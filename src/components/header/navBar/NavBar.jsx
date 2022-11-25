import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  navLinkSelected,
  selectCurrentCalendarSpread,
  selectCurrentDate,
} from '../../../reducers/appSettings';
import { useStyles } from './styles';
import { format } from 'date-fns';

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);
  const currentDate = useSelector(selectCurrentDate);
  const setStyle = (calendar) =>
    currentCalendarSpread === calendar ? classes.selectedLink : undefined;

  const handleLinkClick = (e, route) => {
    dispatch(navLinkSelected(route));
  };
  return (
    <nav>
      <ul className={classes.linkList}>
        <Link to={`/day/${format(currentDate, 'MM-dd-yy')}`}>
          <li
            className={setStyle('day')}
            onClick={(e) => handleLinkClick(e, 'day')}
          >
            Day
          </li>
        </Link>
        <Link to={`/week/${format(currentDate, 'MM-dd-yy')}`}>
          <li
            className={setStyle('week')}
            onClick={(e) => handleLinkClick(e, 'week')}
          >
            Week
          </li>
        </Link>
        <Link to={`/month/${format(currentDate, 'MM-dd-yy')}`}>
          <li
            className={setStyle('month')}
            onClick={(e) => handleLinkClick(e, 'month')}
          >
            Month
          </li>
        </Link>
        <Link to={`/year/${format(currentDate, 'MM-dd-yy')}`}>
          <li
            className={setStyle('year')}
            onClick={(e) => handleLinkClick(e, 'year')}
          >
            Year
          </li>
        </Link>
        <Link to={`/schedule/${format(currentDate, 'MM-dd-yy')}`}>
          <li
            className={setStyle('schedule')}
            onClick={(e) => handleLinkClick(e, 'schedule')}
          >
            Schedule
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
