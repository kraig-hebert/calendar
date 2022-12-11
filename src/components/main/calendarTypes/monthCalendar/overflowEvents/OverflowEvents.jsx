import React from 'react';
import PropTypes from 'prop-types';

import EventListPopUp from '../../../../common/eventListPopUp/EventListPopUp';
import { useStyles } from './styles';

const OverflowEvents = (props) => {
  const { title, classStuff } = props;
  const classes = useStyles();

  const setEventTitleLength = (title) => {
    const newTitle = title.slice(0, 12).trim();
    if (newTitle === title) return newTitle;
    else return `${newTitle}...`;
  };

  return (
    <div className={classes.overflowEvents}>
      <div className={classStuff}>{setEventTitleLength(title)}</div>
      <EventListPopUp />
    </div>
  );
};

OverflowEvents.propTypes = {
  title: PropTypes.string,
  classStuff: PropTypes.string,
};

export default OverflowEvents;
