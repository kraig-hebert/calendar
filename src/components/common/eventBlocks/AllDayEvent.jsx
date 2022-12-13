import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectAllCalendars } from '../../../reducers/appSettings';
import useSetEventTitle from '../../../utils/useSetEventTitle';
import { useStyles } from './styles';

const AllDayEvent = (props) => {
  const { event } = props;
  const allCalendars = useSelector(selectAllCalendars);
  const calendar = allCalendars.filter(
    (calendar) => event.filter === calendar.title
  );
  const classes = useStyles({
    backgroundColor: calendar[0].filter,
    color: event.color,
  });
  return (
    <div className={classes.eventContainer}>
      <div className={classes.eventInfo}>All Day -</div>
      <div className={classes.eventInfo}>
        {useSetEventTitle({ title: event.title })}
      </div>
    </div>
  );
};

AllDayEvent.propTypes = {
  event: PropTypes.object,
};

export default AllDayEvent;
