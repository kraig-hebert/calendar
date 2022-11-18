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
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  const monthFilteredEvents = useSelector(selectMonthFilteredEvents);
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const numberOfDaysInMonth = getDaysInMonth(currentDate);
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

  const getRows = () => {
    if (numberOfDaysInMonth > 29 && startDayOfMonth > 4) return 6;
    else return 5;
  };
  const classes = useStyles({ rows: getRows() });

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

  const renderEvents = (i) => {
    const todaysEventsList = monthFilteredEvents.filter(
      (event) =>
        (new Date(event.startTime).getDate() |
          new Date(event.singleDate).getDate()) ===
        i
    );
    const list = todaysEventsList.map((event, index) => {
      return <div key={index}>{event.title}</div>;
    });
    return list;
  };

  const assembleCalendar = () => {
    let renderedCalendar = new Array();

    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div key={i + startDayOfMonth}>
          <Link to="/day" element={<DayCalendar />}>
            <span
              className={checkIfCurrentDay(i)}
              onClick={(e) => handleDayClick(e, i)}
            >
              {i}
            </span>
          </Link>
          <div className={classes.eventsContainer}>{renderEvents(i)}</div>
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

MonthCalendar.propTypes = {};

export default MonthCalendar;
