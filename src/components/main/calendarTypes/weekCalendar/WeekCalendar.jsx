import React from 'react';
import { useSelector } from 'react-redux';

import { selectWeekFilteredEvents } from '../../../../reducers/eventsSlice';
import DayCalendarColumn from '../../../common/dayCalendarColumn/DayCalendarColumn';
import { useStyles } from './styles';

const WeekCalendar = () => {
  const classes = useStyles();
  const weekFilteredEvents = useSelector(selectWeekFilteredEvents);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const heightList = Object.values(weekFilteredEvents).map(
    (dayEvents) => dayEvents.allDay.length
  );

  const setBorderRight = (index) => {
    if (index === days.length - 1) return true;
    else return false;
  };
  const renderedDayColumns = days.map((day, index) => {
    const dayFilteredEvents = weekFilteredEvents[days[index]];
    return (
      <DayCalendarColumn
        key={index}
        blockWidth="100%"
        displayTime={day === 'Sun' ? true : false}
        calendarWidth="100%"
        borderRight={setBorderRight(index)}
        dayFilteredEvents={dayFilteredEvents}
        height={`${(Math.max(...heightList) + 0.5) * 20}px`}
      />
    );
  });

  return <div className={classes.weekCalendar}>{renderedDayColumns}</div>;
};

export default WeekCalendar;
