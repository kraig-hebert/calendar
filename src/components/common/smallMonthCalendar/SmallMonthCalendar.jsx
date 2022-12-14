import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getDay, getDaysInMonth, format } from 'date-fns';

import { useStyles } from './styles';
import { calendarDaySelected } from '../../../reducers/appSettings';

const SmallMonthCalendar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { month, year, date } = props;
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(new Date(year, month, 1));

  const handleDayClick = (e, day) => {
    const newDate = new Date(year, month, day);
    dispatch(calendarDaySelected(newDate.toJSON()));
    navigate(`/day/${format(newDate, 'MM-dd-yy')}`);
  };

  const checkIfCurrentDay = (i) => {
    if (
      date.getDate() === i &&
      date.getMonth() === month &&
      date.getFullYear() === year
    )
      return classes.currentDay;
    else return classes.notCurrentDay;
  };

  const setDatesOnCalendar = (renderedCalendar) => {
    const startDayOfMonth = getDay(new Date(year, month, 1));
    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i + 7}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div
          key={i + 6 + startDayOfMonth}
          onClick={(e) => handleDayClick(e, i)}
          className={checkIfCurrentDay(i)}
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
