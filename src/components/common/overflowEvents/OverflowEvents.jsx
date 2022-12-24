import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import EventListPopUp from '../eventListPopUp/EventListPopUp';
import { useStyles } from './styles';

const OverflowEvents = (props) => {
  const { title, events, overflowWidth, top, bottom } = props;

  const [overflowEventsOpen, setOverflowEventsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef();
  const classes = useStyles({ width: overflowWidth });

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  });
  return (
    <div className={classes.overflowEvents} ref={ref}>
      <div
        className={classes.title}
        onClick={(e) => setOverflowEventsOpen(true)}
      >
        {title}
      </div>
      <EventListPopUp
        width={width}
        display={overflowEventsOpen}
        events={events}
        overflowEventsOpen={overflowEventsOpen}
        setOverflowEventsOpen={setOverflowEventsOpen}
        top={top}
        bottom={bottom}
      />
    </div>
  );
};

OverflowEvents.propTypes = {
  title: PropTypes.string,
  events: PropTypes.array,
  overflowWidth: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.bool,
};

export default OverflowEvents;
