import React from 'react';
import { useSelector } from 'react-redux';
import { startOfWeek, addDays } from 'date-fns';

import { selectCurrentDate } from '../../../../reducers/appSettings';
import { selectWeekFilteredEvents } from '../../../../reducers/eventsSlice';
import DayCalendarColumn from '../../../common/dayCalendarColumn/DayCalendarColumn';
import { useStyles } from './styles';

const WeekCalendar = () => {
  const classes = useStyles();
  const weekFilteredEvents = useSelector(selectWeekFilteredEvents);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MAX_ALL_DAY_EVENTS = 3;

  const currentDate = useSelector(selectCurrentDate);
  const startDateofWeek = startOfWeek(currentDate);
  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(addDays(startDateofWeek, i));
  }
  const setHeight = () => {
    const heightList = Object.values(weekFilteredEvents).map(
      (dayEvents) => dayEvents.allDay.length
    );
    if (Math.max(...heightList) > MAX_ALL_DAY_EVENTS)
      return ((MAX_ALL_DAY_EVENTS + 1) * 21).toString();
    else return `${Math.max(...heightList) * 21}px`;
  };

  const setBorderRight = (index) => {
    if (index === days.length - 1) return true;
    else return false;
  };
  const renderedDayColumns = days.map((day, index) => {
    const dayFilteredEvents = weekFilteredEvents[days[index]];
    return (
      <div className={classes.dayContainer} key={index}>
        <p className={classes.dayName}>{`${dates[index].getDate()} ${
          days[index]
        }`}</p>
        <DayCalendarColumn
          blockWidth="100%"
          displayTime={day === 'Sun' ? true : false}
          borderRight={setBorderRight(index)}
          dayFilteredEvents={dayFilteredEvents}
          height={setHeight()}
          maxAllDayEvents={3}
          width="100%"
        />
      </div>
    );
  });

  return <div className={classes.weekCalendar}>{renderedDayColumns}</div>;
};

export default WeekCalendar;
