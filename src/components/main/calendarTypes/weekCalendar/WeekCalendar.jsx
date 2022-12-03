import React from 'react';
import { useSelector } from 'react-redux';
import { startOfWeek } from 'date-fns';

import { selectCurrentDate } from '../../../../reducers/appSettings';
import { selectWeekFilteredEvents } from '../../../../reducers/eventsSlice';
import DayCalendarColumn from '../../../common/dayCalendarColumn/DayCalendarColumn';
import { useStyles } from './styles';

const WeekCalendar = () => {
  const classes = useStyles();
  const weekFilteredEvents = useSelector(selectWeekFilteredEvents);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDate = useSelector(selectCurrentDate);
  const startDateofWeek = startOfWeek(currentDate).getDate();
  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(startDateofWeek + i);
  }
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
      <div className={classes.dayContainer} key={index}>
        <p className={classes.dayName}>{`${dates[index]} ${days[index]}`}</p>
        <DayCalendarColumn
          blockWidth="100%"
          displayTime={day === 'Sun' ? true : false}
          calendarWidth="100%"
          borderRight={setBorderRight(index)}
          dayFilteredEvents={dayFilteredEvents}
          height={`${(Math.max(...heightList) + 0.5) * 20}px`}
        />
      </div>
    );
  });

  return <div className={classes.weekCalendar}>{renderedDayColumns}</div>;
};

export default WeekCalendar;
