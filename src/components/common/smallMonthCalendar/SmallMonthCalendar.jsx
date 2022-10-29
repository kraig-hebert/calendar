import React from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth } from 'date-fns';
import { miniCalendarDaySelected } from '../../../reducers/appSettings';

const SmallMonthCalendar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { month, year, date } = props;
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(new Date(year, month, 1)); // returns number of days in month

  const handleDayClick = (e, day) => {
    dispatch(miniCalendarDaySelected(new Date(year, month, day).toJSON()));
  };

  const checkIfCurrentDay = (i) => {
    if (
      date.getDate() === i &&
      date.getMonth() === month &&
      date.getFullYear() === year
    )
      return classes.currentDay;
    else return undefined;
  };

  // returns day of week to start the first day of month on
  const calendarStartDay = () => getDay(new Date(year, month, 1));

  const setDatesOnCalendar = (renderedCalendar) => {
    const startDayOfMonth = calendarStartDay();
    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i + 7}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div
          key={i + 6 + startDayOfMonth}
          className={checkIfCurrentDay(i)}
          onClick={(e) => handleDayClick(e, i)}
        >
          {i}
        </div>
      );
    }
    return renderedCalendar;
  };

  const assembleCalendar = () => {
    const renderedCalendarWithHeader = days.map((day, index) => (
      <div key={index}>{day}</div>
    ));
    return setDatesOnCalendar(renderedCalendarWithHeader);
  };

  return <div className={classes.calendar}>{assembleCalendar()}</div>;
};

/* 
You must send the month and year of the month you want to build
The date is the today used to check currentDate for background green 
*/
SmallMonthCalendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  date: PropTypes.instanceOf(Date),
};

export default SmallMonthCalendar;
