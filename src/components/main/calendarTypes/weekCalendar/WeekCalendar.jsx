import React from 'react';
import DayCalendarColumn from '../../../common/dayCalendarColumn/DayCalendarColumn';
import { useStyles } from './styles';

const WeekCalendar = () => {
  const classes = useStyles();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const setBorderRight = (index) => {
    if (index === days.length - 1) return true;
    else return false;
  };
  const renderedDayColumns = days.map((day, index) => {
    return (
      <DayCalendarColumn
        key={index}
        blockWidth="100%"
        displayTime={day === 'Sun' ? true : false}
        calendarWidth="100%"
        borderRight={setBorderRight(index)}
      />
    );
  });

  return <div className={classes.weekCalendar}>{renderedDayColumns}</div>;
};

export default WeekCalendar;
