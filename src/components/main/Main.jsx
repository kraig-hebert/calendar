import React, { useEffect, useState } from 'react';
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
import { format, startOfWeek, endOfWeek, addMonths } from 'date-fns';
import MonthCalendar from './calendarTypes/monthCalendar/MonthCalendar';
import DayCalendar from './calendarTypes/dayCalendar/DayCalendar';
import WeekCalendar from './calendarTypes/weekCalendar/WeekCalendar';
import YearCalendar from './calendarTypes/yearCalendar/YearCalendar';
import ScheduleCalendar from './calendarTypes/scheduleCalendar/ScheduleCalendar';

const Main = () => {
  const classes = useStyles();
  const date = useSelector(selectCurrentDate);
  const drawerOpen = useSelector(selectDrawerOpen);
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);
  const toggleSideDrawerOpen = useSideDrawerToggle(true);

  const [headerDate, setHeaderDate] = useState(format(date, 'MMMM y')); // format: January 2022

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

  const getWeekFormat = () =>
    `${format(startOfWeek(date), 'MMM d, y')} - ${format(
      endOfWeek(date),
      'MMMM d, y'
    )}`;

  const getScheduleFormat = () =>
    `${format(date, 'MMM y')} - ${format(addMonths(date, 6), 'MMM y')}`;

  useEffect(() => {
    switch (currentCalendarSpread) {
      case 'day':
        setHeaderDate(format(date, 'MMMM d, y'));
        break;
      case 'week':
        setHeaderDate(getWeekFormat());
        break;
      case 'month':
        setHeaderDate(format(date, 'MMMM y'));
        break;
      case 'year':
        setHeaderDate(format(date, 'y'));
        break;
      case 'schedule':
        setHeaderDate(getScheduleFormat());
        break;
    }
  }, [currentCalendarSpread]);

  return (
    <main className={classes.main}>
      <div className={classes.mainHeader}>
        <button className={classes.headerButton}>
          <AiOutlineLeftCircle />
        </button>
        <button className={classes.headerButton}>
          <AiOutlineRightCircle />
        </button>
        <h2 className={classes.headerDate}>{headerDate}</h2>
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
