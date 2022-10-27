import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import {
  selectDrawerOpen,
  selectCurrentDate,
} from '../../reducers/appSettings';
import useSideDrawerToggle from '../../utils/useSideDrawerToggle';
import { format } from 'date-fns';
import MonthCalendar from './calendarTypes/monthCalendar/MonthCalendar';

const Main = () => {
  const classes = useStyles();
  const drawerOpen = useSelector(selectDrawerOpen);
  const date = format(useSelector(selectCurrentDate), 'MMMM y');
  const toggleSideDrawerOpen = useSideDrawerToggle(true);

  return (
    <main className={classes.main}>
      <div className={classes.mainHeader}>
        <button className={classes.headerButton}>
          <AiOutlineLeftCircle />
        </button>
        <button className={classes.headerButton}>
          <AiOutlineRightCircle />
        </button>
        <h2 className={classes.headerDate}>{date}</h2>
      </div>
      <MonthCalendar />

      {!drawerOpen && (
        <GiHamburgerMenu
          className={classes.hamburger}
          onClick={toggleSideDrawerOpen}
        />
      )}
    </main>
  );
};

export default Main;
