import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  selectAllCalendars,
  eventClicked,
} from '../../../reducers/appSettings';
import useSetEventTitle from '../../../utils/useSetEventTitle';
import { useStyles } from './styles';

const AllDayEvent = (props) => {
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
      <div className={classes.eventInfo}>All Day -</div>

      <div className={classes.eventInfo}>
        {useSetEventTitle({ title: event.title, length })}
      </div>
    </div>
  );
};

AllDayEvent.propTypes = {
  event: PropTypes.object,
  width: PropTypes.number,
  length: PropTypes.number,
};

export default AllDayEvent;
