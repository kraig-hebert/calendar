import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'react-jss';

import { selectCustomCalendars } from '../../../../../reducers/appSettings';
import CalendarInput from './calendarInput/CalendarInput';

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
