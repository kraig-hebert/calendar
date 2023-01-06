import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme } from 'react-jss';

import {
  selectDefaultCalendars,
  selectCustomCalendars,
} from '../../../../../reducers/appSettings';
import { useStyles } from './styles';
import CheckBox from './checkbox/CheckBox';

const EventCalendars = (props) => {
  const theme = useTheme();
  const { selectedCalendar, setSelectedCalendar } = props;
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const customCalendars = useSelector(selectCustomCalendars);
  const handleClick = (e, calendar) => setSelectedCalendar(calendar);

  const classes = useStyles({ calendarListLength: customCalendars.length });

  // sets active selected calendar to display checked and uncheck all others
  const setCheckBoxProps = (calendar, checkColor) => {
    if (calendar.title === selectedCalendar) {
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
      <CheckBox {...setCheckBoxProps(calendar, theme.dark.main)} />
      <span>{calendar.title}</span>
    </div>
  ));
  const renderedCustomCalendars = customCalendars.map((calendar, index) => (
    <div key={index} className={classes.calendar}>
      <CheckBox {...setCheckBoxProps(calendar, theme.light.main)} />
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
  selectedCalendar: PropTypes.string,
  setSelectedCalendar: PropTypes.func,
};

export default EventCalendars;
