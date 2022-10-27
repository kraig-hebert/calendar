import React from 'react';
import { useDispatch } from 'react-redux';
import { navLinkSelected } from '../../../reducers/appSettings';
import { useStyles } from './styles';

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <nav>
      <ul className={classes.linkList}>
        <li onClick={(e) => dispatch(navLinkSelected('day'))}>Day</li>
        <li onClick={(e) => dispatch(navLinkSelected('week'))}>Week</li>
        <li onClick={(e) => dispatch(navLinkSelected('month'))}>Month</li>
        <li onClick={(e) => dispatch(navLinkSelected('year'))}>Year</li>
        <li onClick={(e) => dispatch(navLinkSelected('schedule'))}>Schedule</li>
      </ul>
    </nav>
  );
};

export default NavBar;
