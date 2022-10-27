import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import {
  selectDrawerOpen,
  selectCurrentDate,
  selectCurrentCalendarSpread,
} from '../../reducers/appSettings';
import useSideDrawerToggle from '../../utils/useSideDrawerToggle';
import { format } from 'date-fns';
import MonthCalendar from './calendarTypes/monthCalendar/MonthCalendar';
import DayCalendar from './calendarTypes/dayCalendar/DayCalendar';
import WeekCalendar from './calendarTypes/weekCalendar/WeekCalendar';
import YearCalendar from './calendarTypes/yearCalendar/YearCalendar';
import ScheduleCalendar from './calendarTypes/scheduleCalendar/ScheduleCalendar';

const Main = () => {
  const classes = useStyles();
  const drawerOpen = useSelector(selectDrawerOpen);
  const date = format(useSelector(selectCurrentDate), 'MMMM y');
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);
  const toggleSideDrawerOpen = useSideDrawerToggle(true);

  const renderCalendar = () => {
    switch (currentCalendarSpread) {
      case 'day':
        return <DayCalendar />;
      case 'week':
        return <WeekCalendar />;
      case 'month':
        return <MonthCalendar />;
      case 'year':
        return <YearCalendar />;
      case 'schedule':
        return <ScheduleCalendar />;
    }
  };

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
      {renderCalendar()}
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
