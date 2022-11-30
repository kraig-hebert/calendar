import React, { useRef, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { differenceInHours, format } from 'date-fns';

import { useStyles } from './styles';

import { selectAllCalendars } from '../../../reducers/appSettings';

const DayCalendarColumn = (props) => {
  const { dayFilteredEvents } = props;
  const allDayEventsList = dayFilteredEvents.allDay;
  const timedEventsList = dayFilteredEvents.timed;

  const ref = useRef();
  const classes = useStyles(props);
  const renderedTimeBlocks = [];
  const allCalendars = useSelector(selectAllCalendars);

  /* 
    value is set when calendar is painted, and is used to set each event width
    see useLayoutEffect()
  */
  const [calendarWidthValue, setCalendarWidthValue] = useState();

  // returns height of a timeBlock based on how long event is
  const calculateEventHeight = (event) => {
    const diff = differenceInHours(event.endTime, event.startTime);
    const height = diff * 30 + (diff - 1);
    return height;
  };

  // sets the style
  const setStyle = (event) => {
    const calendar = allCalendars.filter(
      (calendar) => event.filter === calendar.title
    );
    if (event.allDay) {
      return {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px',
        width: calendarWidthValue,
        backgroundColor: calendar.length ? calendar[0].filter : 'none',
        color: event.color,
        borderRadius: '5px',
        cursor: 'pointer',
      };
    } else {
      return {
        position: 'absolute',
        height: `${calculateEventHeight(event)}px`,
        width: calendarWidthValue,
        backgroundColor: calendar.length ? calendar[0].filter : 'none',
        color: event.color,
        zIndex: '2',
        cursor: 'pointer',
      };
    }
  };
  const renderedAllDayEvents = allDayEventsList.map((event) => (
    <div key={event.id} style={setStyle(event)}>
      <p>{event.title}</p>
    </div>
  ));

  const renderEventTime = (event) =>
    `${format(event.startTime, 'haaa')} - ${format(event.endTime, 'haaa')}`;

  const renderTimedEvents = (time) => {
    const renderedTimedEvents = timedEventsList
      .filter((event) => event.startTime.getHours() === time)
      .map((event) => (
        <div key={event.id} style={setStyle(event)}>
          <p>{event.title}</p>
          <p>{renderEventTime(event)}</p>
        </div>
      ));
    return renderedTimedEvents;
  };

  // add midnight to column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={1}>
      {renderTimedEvents(0)}
      <div className={classes.time}>mid</div>
    </div>
  );
  // add 1am-11am to column
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 1}>
        {renderTimedEvents(i)}
        <div className={classes.time}>{`${i}am`}</div>
      </div>
    );
  }
  // add noon to the column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={13}>
      {renderTimedEvents(12)}
      <div className={classes.time}>noon</div>
    </div>
  );
  // add 1pm through midnight to the column
  for (let i = 13; i < 24; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 13}>
        {renderTimedEvents(i)}
        <div className={classes.time}>{`${i - 12}pm`}</div>
      </div>
    );
  }
  useLayoutEffect(() => {
    setCalendarWidthValue(ref.current.offsetWidth);
  }, []);

  return (
    <div className={classes.dayCalendar} ref={ref}>
      <div className={classes.allDayEvents}>{renderedAllDayEvents}</div>
      <div className={classes.timeBlocks}>{renderedTimeBlocks}</div>
    </div>
  );
};

DayCalendarColumn.propTypes = {
  borderRight: PropTypes.bool,
  calendarWidth: PropTypes.string,
  dayFilteredEvents: PropTypes.object,
  displayTime: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default DayCalendarColumn;
