import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import { addDays, addMonths, addYears, format } from 'date-fns';
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
  const navigate = useNavigate();
  const drawerOpen = useSelector(selectDrawerOpen);
  const currentDate = useSelector(selectCurrentDate);
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);
  const toggleSideDrawerOpen = useSideDrawerToggle(true);
  const calendarHeaderDate = useCalendarHeaderDate();

  const handleLeftClick = () => {
    let newDate;
    switch (currentCalendarSpread) {
      case 'day':
        newDate = addDays(currentDate, -1);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/day/${format(newDate, 'MM-dd-yy')}`);
        break;
      case 'week':
        newDate = addDays(currentDate, -7);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/week/${format(newDate, 'MM-dd-yy')}`);
        break;
      case 'month':
        newDate = addMonths(currentDate, -1);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/month/${format(newDate, 'MM-dd-yy')}`);
        break;
      case 'year':
        newDate = addYears(currentDate, -1);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/year/${format(newDate, 'MM-dd-yy')}`);
        break;
    }
  };
  const handleRightClick = () => {
    let newDate;
    switch (currentCalendarSpread) {
      case 'day':
        newDate = addDays(currentDate, 1);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/day/${format(newDate, 'MM-dd-yy')}`);
        break;
      case 'week':
        newDate = addDays(currentDate, 7);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/week/${format(newDate, 'MM-dd-yy')}`);
        break;
      case 'month':
        newDate = addMonths(currentDate, 1);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/month/${format(newDate, 'MM-dd-yy')}`);
        break;
      case 'year':
        newDate = addYears(currentDate, 1);
        dispatch(mainHeaderButtonClicked(newDate.toJSON()));
        navigate(`/year/${format(newDate, 'MM-dd-yy')}`);
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
          <Route path="/" element={<MonthCalendar />} />
          <Route path="/day/:date" element={<DayCalendar />} />
          <Route path="/week/:date" element={<WeekCalendar />} />
          <Route path="/month/:date" element={<MonthCalendar />} />
          <Route path="/year/:date" element={<YearCalendar />} />
          <Route path="/schedule/:date" element={<ScheduleCalendar />} />
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
