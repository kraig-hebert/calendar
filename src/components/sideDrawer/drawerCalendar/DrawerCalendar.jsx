import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { getDay, getDaysInMonth } from 'date-fns';
import { selectCurrentDate } from '../../../reducers/appSettings';

const DrawerCalendar = () => {
  const classes = useStyles();
  const date = useSelector(selectCurrentDate);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(date); // returns number of days in month
  const dayNumber = date.getDate(); //  returns number of day of the month

  const checkIfCurrentDay = (i) => {
    if (dayNumber === i) return classes.currentDay;
    else return undefined;
  };

  // returns day of week to start the first day of month on
  const calendarStartDay = () =>
    getDay(new Date(date.getFullYear(), date.getMonth(), 1));

  // add dates to calendar
  const setDatesOnCalendar = (renderedCalendar) => {
    const startDayOfMonth = calendarStartDay();
    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i + 7}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div key={i + 6 + startDayOfMonth} className={checkIfCurrentDay(i)}>
          {i}
        </div>
      );
    }
    return renderedCalendar;
  };

  // assemble renderedCalendar
  const assembleCalendar = () => {
    const renderedCalendarWithHeader = days.map((day, index) => (
      <div key={index}>{day}</div>
    ));
    return setDatesOnCalendar(renderedCalendarWithHeader);
  };

  return <div className={classes.calendar}>{assembleCalendar()}</div>;
};

export default DrawerCalendar;
