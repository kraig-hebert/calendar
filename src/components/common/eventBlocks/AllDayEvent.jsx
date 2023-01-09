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
  const { event, width } = props;
  const dispatch = useDispatch();
  const allCalendars = useSelector(selectAllCalendars);
  const calendar = allCalendars.filter(
    (calendar) => event.filter === calendar.title
  );
  const classes = useStyles({
    backgroundColor: calendar[0].filter,
    color: event.color,
    width: `${width}px`,
  });
  return (
    <div
      className={classes.eventContainer}
      onClick={(e) => dispatch(eventClicked(event.id))}
    >
      <div className={classes.eventInfo}>
        {useSetEventTitle({ title: event.title, length: 20 })}
      </div>
    </div>
  );
};

AllDayEvent.propTypes = {
  event: PropTypes.object,
  width: PropTypes.number,
};

export default AllDayEvent;
