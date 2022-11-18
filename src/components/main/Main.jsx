import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useStyles } from './styles';
import { addDays, addMonths, addYears } from 'date-fns';
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  selectDrawerOpen,
  selectCurrentCalendarSpread,
  mainHeaderButtonClicked,
  selectCurrentDate,
} from '../../reducers/appSettings';
import { selectEvents } from '../../reducers/eventsSlice';
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
  const events = useSelector(selectEvents);

  const handleLeftClick = () => {
    switch (currentCalendarSpread) {
      case 'day':
        dispatch(mainHeaderButtonClicked(addDays(currentDate, -1).toJSON()));
        break;
      case 'week':
        dispatch(mainHeaderButtonClicked(addDays(currentDate, -7).toJSON()));
        break;
      case 'month':
        dispatch(mainHeaderButtonClicked(addMonths(currentDate, -1).toJSON()));
        break;
      case 'year':
        dispatch(mainHeaderButtonClicked(addYears(currentDate, -1).toJSON()));
        break;
    }
  };
  const handleRightClick = () => {
    switch (currentCalendarSpread) {
      case 'day':
        dispatch(mainHeaderButtonClicked(addDays(currentDate, 1).toJSON()));
        break;
      case 'week':
        dispatch(mainHeaderButtonClicked(addDays(currentDate, 7).toJSON()));
        break;
      case 'month':
        dispatch(mainHeaderButtonClicked(addMonths(currentDate, 1).toJSON()));
        break;
      case 'year':
        dispatch(mainHeaderButtonClicked(addYears(currentDate, 1).toJSON()));
        break;
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
      <div className={classes.calendarContainer}>
        <Routes>
          <Route path="/" element={<YearCalendar />} />
          <Route path="/day" element={<DayCalendar />} />
          <Route path="/week" element={<WeekCalendar />} />
          <Route path="/month" element={<MonthCalendar />} />
          <Route path="/year" element={<YearCalendar />} />
          <Route path="/schedule" element={<ScheduleCalendar />} />
        </Routes>
      </div>
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
