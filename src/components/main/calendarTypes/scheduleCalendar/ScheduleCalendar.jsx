import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { useStyles } from './styles';
import { selectScheduleFilteredEvents } from '../../../../reducers/eventsSlice';
import { selectAllCalendars } from '../../../../reducers/appSettings';

const ScheduleCalendar = () => {
  const dispatch = useDispatch();
  const scheduleFilteredEvents = useSelector(selectScheduleFilteredEvents);
  const allCalendars = useSelector(selectAllCalendars);
  const today = new Date();
  const classes = useStyles();
  console.log(scheduleFilteredEvents);

  const getEventDateFormat = (event) => {
    if (event.hasOwnProperty('singleDate'))
      return format(event.singleDate, 'd LLL, EEE');
    else return format(event.startTime, 'd LLL, EEE');
  };
  const getEventTimeFormat = (event) => {
    if (event.hasOwnProperty('singleDate')) return 'All Day';
    else {
      const startTime = format(event.startTime, 'haaa');
      const endTime = format(event.endTime, 'haaa');
      return `${startTime}-${endTime}`;
    }
  };

  const getBackgroundColorFromFilter = (filter) => {
    const calendar = allCalendars.find((calendar) => calendar.title === filter);
    return calendar.filter;
  };

  const setDotStyles = (filter) => {
    return {
      position: 'absolute',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      backgroundColor: getBackgroundColorFromFilter(filter),
    };
  };

  const renderedDayBlocks = scheduleFilteredEvents.map((event, index) => (
    <div className={classes.dayContainer} key={index}>
      <div className={classes.dateContainer}>{getEventDateFormat(event)}</div>
      <div className={classes.eventsContainer}>
        <div className={classes.event}>
          <div className={classes.eventTime}>
            <div style={setDotStyles(event.filter)}></div>
            {getEventTimeFormat(event)}
          </div>
          <div className={classes.eventTitle}>{event.title}</div>
        </div>
      </div>
    </div>
  ));

  return <div className={classes.scheduleCalendar}>{renderedDayBlocks}</div>;
};

export default ScheduleCalendar;
