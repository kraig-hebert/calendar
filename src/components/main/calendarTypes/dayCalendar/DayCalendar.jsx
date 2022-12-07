import React from 'react';
import { useSelector } from 'react-redux';

import DayCalendarColumn from '../../../common/dayCalendarColumn/DayCalendarColumn';
import { selectDayFilteredEvents } from '../../../../reducers/eventsSlice';

const DayCalendar = () => {
  const dayFilteredEvents = useSelector(selectDayFilteredEvents);
  return (
    <>
      <DayCalendarColumn
        blockWidth="100%"
        displayTime={true}
        calendarWidth="90%"
        borderRight={true}
        dayFilteredEvents={dayFilteredEvents}
        maxAllDayEvents={4}
      />
    </>
  );
};

export default DayCalendar;
