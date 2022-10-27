import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth } from 'date-fns';

import { useSelector } from 'react-redux';
import { selectCurrentDate } from '../../../reducers/appSettings';

const SmallMonthCalendar = (props) => {
  const classes = useStyles();
  const { month, year } = props;
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(new Date(year, month, 1)); // returns number of days in month

  //   const checkIfCurrentDay = (i) => {
  //     if (dayNumber === i) return classes.currentDay;
  //     else return undefined;
  //   };

  // returns day of week to start the first day of month on
  const calendarStartDay = () => getDay(new Date(year, month, 1));

  const setDatesOnCalendar = (renderedCalendar) => {
    const startDayOfMonth = calendarStartDay();
    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i + 7}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(<div key={i + 6 + startDayOfMonth}>{i}</div>);
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

SmallMonthCalendar.propTypes = {
  month: PropTypes.string,
};

export default SmallMonthCalendar;
