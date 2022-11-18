import React from 'react';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentDate,
  calendarDaySelected,
} from '../../../../reducers/appSettings';
import { selectMonthFilteredEvents } from '../../../../reducers/eventsSlice';
import { getDay, getDaysInMonth } from 'date-fns';
import { Link } from 'react-router-dom';
import DayCalendar from '../dayCalendar/DayCalendar';
import PropTypes from 'prop-types';

const MonthCalendar = (props) => {
  const { events } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  console.log(events);
  const monthFilteredEvents = useSelector(selectMonthFilteredEvents);
  console.log(monthFilteredEvents);
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

  const renderEvents = (i) => {};

  const assembleCalendar = () => {
    let renderedCalendar = new Array();
    const startDayOfMonth = getDay(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    );
    const lastDayOfMonth = getDay(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        numberOfDaysInMonth
      )
    );
    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div key={i + startDayOfMonth} className={classes.calendarDay}>
          <Link to="/day" element={<DayCalendar events={events} />}>
            <span
              className={checkIfCurrentDay(i)}
              onClick={(e) => handleDayClick(e, i)}
            >
              {i}
            </span>
            <div className={classes.eventsContainer}>{renderEvents(i)}</div>
          </Link>
        </div>
      );
    }
    for (let i = lastDayOfMonth + 1; i < 7; i++) {
      renderedCalendar.push(<div key={i + 40}></div>);
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

MonthCalendar.propTypes = {
  events: PropTypes.array,
};

export default MonthCalendar;
