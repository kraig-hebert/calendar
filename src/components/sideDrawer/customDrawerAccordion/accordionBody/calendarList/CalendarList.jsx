import React from 'react';
import { useSelector } from 'react-redux';
import { selectCustomCalendars } from '../../../../../reducers/appSettings';
import CalendarInput from './calendarInput/CalendarInput';
import { useTheme } from 'react-jss';

const CalendarList = () => {
  const theme = useTheme();
  const customCalendars = useSelector(selectCustomCalendars);
  const renderedCalendarList = customCalendars.map((calendar) => {
    return (
      <CalendarInput
        title={calendar.title}
        key={calendar.id}
        checkBoxBackgroundColor={calendar.filter}
        checkColor={theme.light.main}
      />
    );
  });
  return <>{renderedCalendarList}</>;
};

export default CalendarList;
