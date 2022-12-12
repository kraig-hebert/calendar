import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { selectAllCalendars } from '../../../reducers/appSettings';
import { useStyles } from './styles';

const EventListPopUp = (props) => {
  const { events } = props;
  console.log(events);
  const classes = useStyles(props);
  const allCalendars = useSelector(selectAllCalendars);

  const setEventStyles = (event) => {
    const calendar = allCalendars.filter(
      (calendar) => event.filter === calendar.title
    );
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '20px',
      backgroundColor: calendar[0].filter,
      color: event.color,
      cursor: 'pointer',
    };
  };

  const setEventTitleLength = (title) => {
    const newTitle = title.slice(0, 12).trim();
    if (newTitle === title) return newTitle;
    else return `${newTitle}...`;
  };

  const eventListForRender = events.map((event, index) => {
    if (event.allDay)
      return (
        <div style={setEventStyles(event)} key={index}>
          <div className={classes.eventInfo}>All Day -</div>
          <div className={classes.eventInfo}>
            {setEventTitleLength(event.title)}
          </div>
        </div>
      );
    else
      return (
        <div style={setEventStyles(event)} key={index}>
          <div className={classes.eventInfo}>
            {format(event.startTime, 'hh:mm aaa')} -
          </div>
          <div className={classes.eventInfo}>
            {setEventTitleLength(event.title)}
          </div>
        </div>
      );
  });
  return <div className={classes.eventListPopUp}>{eventListForRender}</div>;
};

EventListPopUp.propTypes = {
  width: PropTypes.number,
  display: PropTypes.bool,
  events: PropTypes.array,
};

export default EventListPopUp;
