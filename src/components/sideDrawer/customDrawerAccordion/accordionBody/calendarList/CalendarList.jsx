import React from 'react';
import CalendarInput from './calendarInput/CalendarInput';
import { useStyles } from './styles';

const CalendarList = () => {
  const classes = useStyles();
  const customCalendars = ['work', 'workouts'];
  const renderedCalendarList = customCalendars.map((calendar, index) => {
    return <CalendarInput title={calendar} classes={classes} key={index} />;
  });
  return <div>{renderedCalendarList}</div>;
};

export default CalendarList;
