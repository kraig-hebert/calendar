import React, { useRef, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { differenceInHours, format } from 'date-fns';
import { useTheme } from 'react-jss';

import {
  selectAllCalendars,
  eventClicked,
} from '../../../reducers/appSettings';
import { useStyles } from './styles';
import AllDayEvent from '../eventBlocks/AllDayEvent';
import OverflowEvents from '../overflowEvents/OverflowEvents';

const DayCalendarColumn = (props) => {
  const { dayFilteredEvents, maxAllDayEvents } = props;
  const dispatch = useDispatch();
  const allDayEventsList = dayFilteredEvents.allDay;
  const timedEventsList = dayFilteredEvents.timed;

  const ref = useRef();
  const theme = useTheme();

  const renderedTimeBlocks = [];
  const allCalendars = useSelector(selectAllCalendars);

  /* 
    value is set when calendar is painted, and is used to set each event width
    see useLayoutEffect()
  */
  const [calendarWidthValue, setCalendarWidthValue] = useState(0);
  const styleProps = { ...props, calendarWidth: calendarWidthValue };
  const classes = useStyles(styleProps);

  // returns height of a timeBlock based on how long event is
  const calculateEventHeight = (event) => {
    const diff = differenceInHours(event.endTime, event.startTime);
    const height = diff * 30 + (diff - 3);
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
        width: calendarWidthValue - 10,
        margin: '0 5px',
        backgroundColor: calendar.length
          ? calendar[0].filter
          : theme.dark.quarterAlpha,
        color: calendar.length ? event.color : theme.light.main,
        borderRadius: '5px',
        cursor: 'pointer',
      };
    } else {
      return {
        position: 'absolute',
        height: `${calculateEventHeight(event)}px`,
        width: calendarWidthValue - 3,
        padding: '1px',
        backgroundColor: calendar.length ? calendar[0].filter : 'none',
        color: event.color,
        fontSize: '.9rem',
        zIndex: '2',
        cursor: 'pointer',
      };
    }
  };

  const setOverflowEventTitle = () => {
    const extraEventTotal = allDayEventsList.length - maxAllDayEvents;
    if (extraEventTotal > 1) return `${extraEventTotal} more events`;
    else return `${extraEventTotal} more event`;
  };

  const renderAllDayEvents = () => {
    let newEventList = [];
    if (allDayEventsList.length <= maxAllDayEvents)
      newEventList = allDayEventsList;
    else {
      newEventList = allDayEventsList.slice(0, maxAllDayEvents);
      newEventList.push({
        title: setOverflowEventTitle(),
        allDay: true,
        overflow: true,
      });
    }
    const renderedAllDayEvents = newEventList.map((event, index) => {
      if (!event.overflow)
        return (
          <div key={index}>
            <AllDayEvent
              event={event}
              width={calendarWidthValue - 10}
              key={index}
            />
          </div>
        );
      else
        return (
          <div key={index}>
            <OverflowEvents
              title={event.title}
              events={allDayEventsList}
              overflowWidth={(calendarWidthValue - 10).toString() + 'px'}
              top={maxAllDayEvents * 21}
              bottom={false}
            />
            <div className={classes.eventBorder}></div>
          </div>
        );
    });
    return renderedAllDayEvents;
  };

  const renderEventTime = (event) =>
    `${format(event.startTime, 'haaa')} - ${format(event.endTime, 'haaa')}`;

  const renderTimedEvents = (time) => {
    const renderedTimedEvents = timedEventsList
      .filter((event) => event.startTime.getHours() === time)
      .map((event, index) => (
        <div
          key={index}
          style={setStyle(event)}
          onClick={(e) => dispatch(eventClicked(event.id))}
        >
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
  }, [setCalendarWidthValue]);

  return (
    <div className={classes.dayCalendar} ref={ref}>
      <div className={classes.allDayEvents}>{renderAllDayEvents()}</div>
      <div className={classes.timeBlocks}>{renderedTimeBlocks}</div>
    </div>
  );
};

DayCalendarColumn.propTypes = {
  borderRight: PropTypes.bool,
  blockWidth: PropTypes.string,
  dayFilteredEvents: PropTypes.object,
  displayTime: PropTypes.bool,
  height: PropTypes.string,
  maxAllDayEvents: PropTypes.number,
  width: PropTypes.string,
};

export default DayCalendarColumn;
