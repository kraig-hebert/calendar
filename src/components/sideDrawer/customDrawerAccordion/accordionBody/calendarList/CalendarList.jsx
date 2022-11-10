import React from 'react';
import { useSelector } from 'react-redux';
import { selectCustomCalendars } from '../../../../../reducers/appSettings';
import CalendarInput from './calendarInput/CalendarInput';

const CalendarList = () => {
  const customCalendars = useSelector(selectCustomCalendars);
  console.log(customCalendars);
  const renderedCalendarList = customCalendars.map((calendar) => {
    return (
      <CalendarInput
        title={calendar.title}
        key={calendar.id}
        checkBoxBackgroundColor={calendar.filter}
        checkColor="#fff"
      />
    );
  });
  return <>{renderedCalendarList}</>;
};

export default CalendarList;
