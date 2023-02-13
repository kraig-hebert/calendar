import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { useStyles } from './styles';
import { selectScheduleFilteredEvents } from '../../../../reducers/eventsSlice';
import { selectAllCalendars } from '../../../../reducers/appSettings';
import { months } from '../../../../helpers/dateHelpers';

const ScheduleCalendar = () => {
  const dispatch = useDispatch();
  const scheduleFilteredEvents = useSelector(selectScheduleFilteredEvents);
  const allCalendars = useSelector(selectAllCalendars);
  const today = new Date();
  const classes = useStyles();
  // console.log(scheduleFilteredEvents);

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

  const createDayBlock = (events, date, key) => {
    return (
      <div className={classes.dayContainer} key={key}>
        <div className={classes.dateContainer}>
          {format(date, 'd LLL, EEE')}
        </div>
        <div className={classes.eventsContainer}>
          {events.map((event, index) => (
            <div className={classes.event} key={index}>
              <div className={classes.eventTime}>
                <div style={setDotStyles(event.filter)}></div>
                {getEventTimeFormat(event)}
              </div>
              <div className={classes.eventTitle}>{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayBlocks = () => {
    const renderedDayBlocks = [];
    for (const month in scheduleFilteredEvents) {
      for (const day in scheduleFilteredEvents[month]) {
        if (scheduleFilteredEvents[month][day].length < 1) continue;
        else
          renderedDayBlocks.push(
            createDayBlock(
              scheduleFilteredEvents[month][day],
              new Date(today.getFullYear(), months.indexOf(month), day),
              `${month}_${day}`
            )
          );
      }
    }
    console.log(renderedDayBlocks);
    return renderedDayBlocks;
  };

  return <div className={classes.scheduleCalendar}>{renderDayBlocks()}</div>;
};

export default ScheduleCalendar;
