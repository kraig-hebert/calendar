import React from 'react';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentDate,
  calendarDaySelected,
} from '../../../../reducers/appSettings';
import { getDay, getDaysInMonth } from 'date-fns';

const MonthCalendar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  const today = new Date();
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(currentDate);

  const handleDayClick = (e, day) => {
    dispatch(
      calendarDaySelected(
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        ).toJSON()
      )
    );
  };

  const checkIfCurrentDay = (i) => {
    if (
      today.getDate() === i &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    )
      return classes.currentDay;
    else return undefined;
  };

  const assembleCalendar = () => {
    let renderedCalendar = new Array();
    const startDayOfMonth = getDay(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    );
    console.log(startDayOfMonth, currentDate);
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
  return (
    <div className={classes.monthCalendar}>
      <div className={classes.calendarHeader}>
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className={classes.calendarBody}>{assembleCalendar()}</div>
    </div>
  );
};

export default MonthCalendar;
