import React from 'react';
import { useSelector } from 'react-redux';

import DayCalendarColumn from '../../../common/dayCalendarColumn/DayCalendarColumn';
import { selectDayFilteredEvents } from '../../../../reducers/eventsSlice';
import { useStyles } from './styles';

const DayCalendar = () => {
  const classes = useStyles();
  const dayFilteredEvents = useSelector(selectDayFilteredEvents);
  return (
    <div className={classes.dayCalendar}>
      <DayCalendarColumn
        blockWidth="100%"
        displayTime={true}
        borderRight={true}
        dayFilteredEvents={dayFilteredEvents}
        maxAllDayEvents={4}
        width="90%"
      />
    </div>
  );
};

export default DayCalendar;
