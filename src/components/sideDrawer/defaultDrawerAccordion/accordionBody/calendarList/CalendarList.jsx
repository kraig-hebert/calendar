import React from 'react';
import CalendarInput from './calendarInput/CalendarInput';
import { useStyles } from './styles';

const CalendarList = () => {
  const classes = useStyles();
  const defaultCalendars = [
    {
      title: 'Holidays',
      filter: 'pink',
    },
    {
      title: 'Birthdays',
      filter: 'yellow',
    },
    {
      title: 'Events',
      filter: 'lightseagreen',
    },
    {
      title: 'Reminders',
      filter: 'peru',
    },
  ];
  const renderedCalendarList = defaultCalendars.map((calendar, index) => {
    return (
      <CalendarInput
        title={calendar.title}
        classes={classes}
        key={index}
        checkBoxBackgroundColor={calendar.filter}
        checkColor="#000"
      />
    );
  });
  return <div>{renderedCalendarList}</div>;
};

export default CalendarList;
