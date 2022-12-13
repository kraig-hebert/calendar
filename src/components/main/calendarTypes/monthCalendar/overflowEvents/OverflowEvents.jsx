import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import EventListPopUp from '../../../../common/eventListPopUp/EventListPopUp';
import { useStyles } from './styles';

const OverflowEvents = (props) => {
  const { title, events } = props;

  const [overflowEventsOpen, setOverflowEventsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef();
  const classes = useStyles();

  const setEventTitleLength = (title) => {
    const newTitle = title.slice(0, 12).trim();
    if (newTitle === title) return newTitle;
    else return `${newTitle}...`;
  };

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);
  return (
    <div className={classes.overflowEvents} ref={ref}>
      <div
        className={classes.title}
        onClick={(e) => setOverflowEventsOpen(true)}
      >
        {setEventTitleLength(title)}
      </div>
      <EventListPopUp
        width={width}
        display={overflowEventsOpen}
        events={events}
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
