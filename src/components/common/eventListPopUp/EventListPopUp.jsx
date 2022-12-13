import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

import AllDayEvent from '../eventBlocks/AllDayEvent';
import { useStyles } from './styles';
import TimedEvent from '../eventBlocks/TimedEvent';

const EventListPopUp = (props) => {
  const { events, overflowEventsOpen, setOverflowEventsOpen } = props;
  const setDynamicEventContainerStyles = () => {
    if (overflowEventsOpen) return { height: `${events.length * 27}px` };
    else return { height: '0px' };
  };

  const dynamicEventContainerStyles = setDynamicEventContainerStyles();
  console.log(dynamicEventContainerStyles);
  const classes = useStyles({ ...props, ...dynamicEventContainerStyles });

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
  setOverflowEventsOpen: PropTypes.bool,
  setOverflowEventsOpen: PropTypes.func,
};

export default EventListPopUp;
