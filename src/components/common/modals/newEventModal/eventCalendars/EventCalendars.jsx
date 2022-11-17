import React, { useState } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import {
  selectDefaultCalendars,
  selectCustomCalendars,
} from '../../../../../reducers/appSettings';
import CheckBox from './checkbox/CheckBox';

const EventCalendars = () => {
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const customCalendars = useSelector(selectCustomCalendars);
  const [selectedCheck, setSelectedCheck] = useState('Holidays');
  const handleClick = (e, calendarTitle) => setSelectedCheck(calendarTitle);
  const classes = useStyles({ calendarListLength: customCalendars.length });
  const setStyles = (calendar, checkColor) => {
    if (calendar.title === selectedCheck) {
      return {
        checkBoxBackgroundColor: calendar.filter,
        checkColor: checkColor,
        onClick: (e) => handleClick(e, calendar.title),
      };
    } else {
      return {
        checkBoxBackgroundColor: 'rgb(225, 226, 227)',
        checkColor: 'rgb(225, 226, 227)',
        onClick: (e) => handleClick(e, calendar.title),
      };
    }
  };

  const renderedDefaultCalendars = defaultCalendars.map((calendar, index) => (
    <div key={index} className={classes.calendar}>
      <CheckBox {...setStyles(calendar, '#000')} />
      <span>{calendar.title}</span>
    </div>
  ));
  const renderedCustomCalendars = customCalendars.map((calendar, index) => (
    <div key={index} className={classes.calendar}>
      <CheckBox {...setStyles(calendar, '#fff')} />
      <span>{calendar.title}</span>
    </div>
  ));

  return (
    <>
      <div className={classes.defaultCalendarRow}>
        {renderedDefaultCalendars}
      </div>
      {renderedCustomCalendars.length > 0 && (
        <div className={classes.customCalendarRow}>
          {renderedCustomCalendars}
        </div>
      )}
    </>
  );
};

export default EventCalendars;
