import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import EventListPopUp from '../eventListPopUp/EventListPopUp';
import { useStyles } from './styles';

const OverflowEvents = (props) => {
  const { title, events, overflowWidth } = props;

  const [overflowEventsOpen, setOverflowEventsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  console.log(width, 'overflow');
  const ref = useRef();
  const classes = useStyles({ width: overflowWidth });

  useLayoutEffect(() => () => {
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
      />
    </div>
  );
};

OverflowEvents.propTypes = {
  title: PropTypes.string,
  events: PropTypes.array,
};

export default OverflowEvents;
