import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import {
  selectAllCalendars,
  eventClicked,
} from '../../../reducers/appSettings';
import useSetEventTitle from '../../../utils/useSetEventTitle';
import { useStyles } from './styles';

const TimedEvent = (props) => {
  const { event, width, length } = props;
  const dispatch = useDispatch();
  const allCalendars = useSelector(selectAllCalendars);
  const calendar = allCalendars.filter(
    (calendar) => event.filter === calendar.title
  );
  const classes = useStyles({
    backgroundColor: calendar[0].filter,
    color: event.color,
    width: width ? `${width}px` : '90%',
    cursor: event.notEditable ? 'default' : 'pointer',
  });

  const handleEventClick = () => {
    if (event.notEditable) return;
    dispatch(eventClicked(event.id));
  };

  return (
    <div className={classes.eventContainer} onClick={handleEventClick}>
      <div className={classes.eventInfo}>
        {format(event.startTime, 'hh:mm aaa')} -
      </div>
      <div className={classes.eventInfo}>
        {useSetEventTitle({ title: event.title, length })}
      </div>
    </div>
  );
};

TimedEvent.propTypes = {
  event: PropTypes.object,
  width: PropTypes.number,
  length: PropTypes.number,
};

export default TimedEvent;
