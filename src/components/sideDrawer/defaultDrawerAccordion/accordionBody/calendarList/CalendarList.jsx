import React from 'react';
import { useSelector } from 'react-redux';
import CalendarInput from './calendarInput/CalendarInput';
import { selectDefaultCalendars } from '../../../../../reducers/appSettings';
import { useStyles } from './styles';
import { useTheme } from 'react-jss';

const CalendarList = () => {
  const classes = useStyles();
  const theme = useTheme();
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const renderedCalendarList = defaultCalendars.map((calendar, index) => {
    return (
      <CalendarInput
        title={calendar.title}
        classes={classes}
        key={index}
        checkBoxBackgroundColor={calendar.filter}
        checkColor={theme.dark.main}
      />
    );
  });
  return <div>{renderedCalendarList}</div>;
};

export default CalendarList;
