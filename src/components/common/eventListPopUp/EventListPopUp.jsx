import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

import AllDayEvent from '../eventBlocks/AllDayEvent';
import { useStyles } from './styles';
import TimedEvent from '../eventBlocks/TimedEvent';

const EventListPopUp = (props) => {
  const { events, overflowEventsOpen, setOverflowEventsOpen, top } = props;
  const setTransitionProps = () => {
    if (overflowEventsOpen)
      return { height: `${events.length * 20 + 50}px`, top: top };
    else return { height: '0px', top: '0' };
  };

  const classes = useStyles({ ...props, ...setTransitionProps() });

  const eventListForRender = events.map((event, index) => {
    if (event.allDay) return <AllDayEvent event={event} key={index} />;
    else return <TimedEvent event={event} key={index} />;
  });
  return (
    <div className={classes.eventListPopUp}>
      <div className={classes.iconContainer}>
        <AiFillCloseCircle onClick={(e) => setOverflowEventsOpen(false)} />
      </div>
      <div className={classes.eventsContainer}>{eventListForRender}</div>
    </div>
  );
};

EventListPopUp.propTypes = {
  width: PropTypes.number,
  display: PropTypes.bool,
  events: PropTypes.array,
  setOverflowEventsOpen: PropTypes.bool,
  setOverflowEventsOpen: PropTypes.func,
  top: PropTypes.number,
};

export default EventListPopUp;
