import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { selectAllCalendars } from '../../../reducers/appSettings';
import PropTypes from 'prop-types';

const DayCalendarColumn = (props) => {
  const { dayFilteredEvents } = props;
  const classes = useStyles(props);
  const renderedTimeBlocks = new Array();
  const allCalendars = useSelector(selectAllCalendars);

  const allDayEventsList = dayFilteredEvents.allDay;
  const timedEventsList = dayFilteredEvents.timed;

  const setStyle = (event) => {
    const calendar = allCalendars.filter(
      (calendar) => event.filter === calendar.title
    );
    return {
      backgroundColor: calendar.length ? calendar[0].filter : 'none',
      color: event.color,
    };
  };
  const renderedAllDayEvents = allDayEventsList.map((event) => (
    <div key={event.id} style={setStyle(event)}>
      {event.title}
    </div>
  ));

  const renderTimedEvents = (time) => {
    console.log(time);
    const renderedTimedEvents = timedEventsList
      .filter((event) => event.startTime.getHours() === time)
      .map((event) => (
        <div key={event.id} style={setStyle(event)}>
          {event.title}
        </div>
      ));
    console.log(renderedTimedEvents);
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
        <div className={classes.time}>{`${i}pm`}</div>
      </div>
    );
  }
  return (
    <div className={classes.dayCalendar}>
      <div className={classes.allDayEvents}>{renderedAllDayEvents}</div>
      <div className={classes.timeBlocks}>{renderedTimeBlocks}</div>
    </div>
  );
};

DayCalendarColumn.propTypes = {
  dayFilteredEvents: PropTypes.object,
  width: PropTypes.string,
  displayTime: PropTypes.bool,
  calendarWidth: PropTypes.string,
  borderRight: PropTypes.bool,
};

export default DayCalendarColumn;
