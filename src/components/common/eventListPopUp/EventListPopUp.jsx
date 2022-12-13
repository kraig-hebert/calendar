import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { selectAllCalendars } from '../../../reducers/appSettings';
import AllDayEvent from '../eventBlocks/AllDayEvent';
import { useStyles } from './styles';
import TimedEvent from '../eventBlocks/TimedEvent';

const EventListPopUp = (props) => {
  const { events, setOverflowEventsOpen } = props;

  const classes = useStyles({ ...props, height: `${events.length * 27}px` });
  const allCalendars = useSelector(selectAllCalendars);

  const setEventStyles = (event) => {
    const calendar = allCalendars.filter(
      (calendar) => event.filter === calendar.title
    );
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '90%',
      height: '20px',
      backgroundColor: calendar[0].filter,
      color: event.color,
      margin: '1px 0px',
      borderRadius: '5px',
      cursor: 'pointer',
    };
  };

  const eventListForRender = events.map((event, index) => {
    if (event.allDay) return <AllDayEvent event={event} key={index} />;
    else return <TimedEvent event={event} key={index} />;
  });
  return (
    <div className={classes.eventListPopUp}>
      <div className={classes.iconContainer}>
        <AiFillCloseCircle onClick={(e) => setOverflowEventsOpen(false)} />
      </div>
      {eventListForRender}
    </div>
  );
};

EventListPopUp.propTypes = {
  width: PropTypes.number,
  display: PropTypes.bool,
  events: PropTypes.array,
  setOverflowEventsOpen: PropTypes.func,
};

export default EventListPopUp;
