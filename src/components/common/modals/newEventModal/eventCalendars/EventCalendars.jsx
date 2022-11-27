import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import {
  selectDefaultCalendars,
  selectCustomCalendars,
} from '../../../../../reducers/appSettings';
import CheckBox from './checkbox/CheckBox';

const EventCalendars = (props) => {
  const { selectedCalendar, setSelectedCalendar } = props;
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const customCalendars = useSelector(selectCustomCalendars);
  const handleClick = (e, calendar) => setSelectedCalendar(calendar);
  const classes = useStyles({ calendarListLength: customCalendars.length });
  const setStyles = (calendar, checkColor) => {
    if (calendar.title === selectedCalendar.title) {
      return {
        checkBoxBackgroundColor: calendar.filter,
        checkColor: checkColor,
        onClick: (e) => handleClick(e, calendar),
      };
    } else {
      return {
        checkBoxBackgroundColor: 'rgb(225, 226, 227)',
        checkColor: 'rgb(225, 226, 227)',
        onClick: (e) => handleClick(e, calendar),
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
    <div key={index + 4} className={classes.calendar}>
      <CheckBox {...setStyles(calendar, '#fff')} />
      <span>{calendar.title}</span>
    </div>
  ));

  return (
    <>
      <div className={classes.calendarRow}>
        {renderedDefaultCalendars}
        {renderedCustomCalendars.length > 0 && renderedCustomCalendars}
      </div>
    </>
  );
};

EventCalendars.propTypes = {
  selectedCalendar: PropTypes.object,
  setSelectedCalendar: PropTypes.func,
};

export default EventCalendars;
