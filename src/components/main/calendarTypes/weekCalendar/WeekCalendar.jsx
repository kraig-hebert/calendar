import React from 'react';
import { useSelector } from 'react-redux';
import { startOfWeek, addDays } from 'date-fns';

import { selectCurrentDate } from '../../../../reducers/appSettings';
import { selectWeekFilteredEvents } from '../../../../reducers/eventsSlice';
import WeekCalendarColumn from '../../../common/weekCalendarColumn/WeekCalendarColumn';
import { useStyles } from './styles';

const WeekCalendar = () => {
  const classes = useStyles();
  const weekFilteredEvents = useSelector(selectWeekFilteredEvents);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDate = useSelector(selectCurrentDate);
  const startDateofWeek = startOfWeek(currentDate);
  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(addDays(startDateofWeek, i));
  }
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
        <WeekCalendarColumn
          blockWidth="100%"
          displayTime={day === 'Sun' ? true : false}
          borderRight={setBorderRight(index)}
          dayFilteredEvents={dayFilteredEvents}
          maxAllDayEvents={3}
          width="100%"
        />
      </div>
    );
  });

  return <div className={classes.weekCalendar}>{renderedDayColumns}</div>;
};

export default WeekCalendar;
