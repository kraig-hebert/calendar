import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDay, getDaysInMonth, format } from 'date-fns';

import {
  selectCurrentDate,
  calendarDaySelected,
  selectAllCalendars,
} from '../../../../reducers/appSettings';
import { selectMonthFilteredEvents } from '../../../../reducers/eventsSlice';

import { useStyles } from './styles';
import OverflowEvents from './overflowEvents/OverflowEvents';

const MonthCalendar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentDate = useSelector(selectCurrentDate);
  const monthFilteredEvents = useSelector(selectMonthFilteredEvents);
  const allCalendars = useSelector(selectAllCalendars);
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

  // set number of rows to display the correct amount of weeks for the given month
  const getNumberOfCalendarRows = () => {
    if (numberOfDaysInMonth < 31 && startDayOfMonth > 5) return 6;
    else if (numberOfDaysInMonth > 30 && startDayOfMonth > 4) return 6;
    else return 5;
  };
  const numberOfCalendarRows = getNumberOfCalendarRows();
  const classes = useStyles({ rows: numberOfCalendarRows });

  const handleDayClick = (day) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    dispatch(calendarDaySelected(newDate.toJSON()));
    navigate(`/day/${format(newDate, 'MM-dd-yy')}`);
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

  const setEventStyles = (event) => {
    const calendar = allCalendars.filter(
      (calendar) => event.filter === calendar.title
    );
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '20px',
      backgroundColor: calendar[0].filter,
      color: event.color,
      borderRadius: '5px',
      cursor: 'pointer',
    };
  };
  const setEventTitleLength = (title) => {
    const newTitle = title.slice(0, 12).trim();
    if (newTitle === title) return newTitle;
    else return `${newTitle}...`;
  };

  const finalizeEventList = (eventList, maxListLength) => {
    if (eventList.length <= maxListLength) return eventList;
    else {
      const finalEventList = eventList.slice(0, maxListLength);
      finalEventList.push({ title: 'More Events' });
      return finalEventList;
    }
  };

  const renderEvents = (i) => {
    const allDayEventsList = monthFilteredEvents.allDay.filter(
      (event) => event.singleDate.getDate() === i
    );
    const timedEventsList = monthFilteredEvents.timed
      .filter((event) => event.startTime.getDate() === i)
      .sort((eventA, eventB) => eventA.startTime - eventB.startTime);

    const todaysEventsList = allDayEventsList.concat(timedEventsList);
    let eventListForRender;
    switch (numberOfCalendarRows) {
      case 5:
        eventListForRender = finalizeEventList(todaysEventsList, 4);
        break;
      case 6:
        eventListForRender = finalizeEventList(todaysEventsList, 3);
        break;
    }
    return eventListForRender.map((event, index) => {
      if (event.allDay)
        return (
          <div style={setEventStyles(event)} key={index}>
            <div className={classes.eventInfo}>All Day -</div>
            <div className={classes.eventInfo}>
              {setEventTitleLength(event.title)}
            </div>
          </div>
        );
      else if (event.startTime)
        return (
          <div style={setEventStyles(event)} key={index}>
            <div className={classes.eventInfo}>
              {format(event.startTime, 'hh:mm aaa')} -
            </div>
            <div className={classes.eventInfo}>
              {setEventTitleLength(event.title)}
            </div>
          </div>
        );
      else
        return (
          <OverflowEvents
            title={event.title}
            key={index}
            events={todaysEventsList}
          />
        );
    });
  };

  const assembleCalendar = () => {
    let renderedCalendar = [];

    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div key={i + startDayOfMonth}>
          <span
            className={checkIfCurrentDay(i)}
            onClick={(e) => handleDayClick(i)}
          >
            {i}
          </span>
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
