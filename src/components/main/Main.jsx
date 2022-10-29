import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { addYears } from 'date-fns';
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  selectDrawerOpen,
  selectCurrentCalendarSpread,
  mainHeaderButtonClicked,
  selectCurrentDate,
} from '../../reducers/appSettings';
import useSideDrawerToggle from '../../utils/useSideDrawerToggle';
import useCalendarHeaderDate from '../../utils/useCalendarHeaderDate';
import MonthCalendar from './calendarTypes/monthCalendar/MonthCalendar';
import DayCalendar from './calendarTypes/dayCalendar/DayCalendar';
import WeekCalendar from './calendarTypes/weekCalendar/WeekCalendar';
import YearCalendar from './calendarTypes/yearCalendar/YearCalendar';
import ScheduleCalendar from './calendarTypes/scheduleCalendar/ScheduleCalendar';

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerOpen = useSelector(selectDrawerOpen);
  const currentDate = useSelector(selectCurrentDate);
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);
  const toggleSideDrawerOpen = useSideDrawerToggle(true);
  const calendarHeaderDate = useCalendarHeaderDate();

  const handleLeftClick = () => {
    switch (currentCalendarSpread) {
      case 'year':
        dispatch(mainHeaderButtonClicked(addYears(currentDate, -1)));
    }
  };
  const handleRightClick = () => {
    switch (currentCalendarSpread) {
      case 'year':
        dispatch(mainHeaderButtonClicked(addYears(currentDate, 1)));
    }
  };

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
        <CgArrowLeftR
          className={classes.headerIconButton}
          onClick={handleLeftClick}
        />
        <CgArrowRightR
          className={classes.headerIconButton}
          onClick={handleRightClick}
        />
        <h2 className={classes.headerDate}>{calendarHeaderDate}</h2>
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
