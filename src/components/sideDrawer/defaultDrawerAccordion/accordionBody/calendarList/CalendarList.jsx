import React from 'react';
import CalendarInput from './calendarInput/CalendarInput';
import { useStyles } from './styles';

const CalendarList = () => {
  const classes = useStyles();
  const defaultCalendars = ['holidays', 'birthdays', 'reminders', 'tasks'];
  const renderedCalendarList = defaultCalendars.map((calendar, index) => {
    return (
      <CalendarInput
        title={calendar}
        classes={classes}
        key={index}
        checkBoxBackgroundColor="#000"
        checkColor="yellow"
      />
    );
  });
  return <div>{renderedCalendarList}</div>;
};

export default CalendarList;
