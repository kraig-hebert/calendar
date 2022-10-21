import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import { getDaysInMonth } from 'date-fns';

const DrawerCalendar = (props) => {
  const { date } = props;
  const classes = useStyles();
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(date);
  const dayNumber = date.getDate();

  const checkIfCurrentDay = (i) => {
    if (dayNumber === i) return classes.currentDay;
    else return undefined;
  };

  const renderedCalendar = days.map((day, index) => (
    <div key={index}>{day}</div>
  ));
  for (let i = 1; i <= numberOfDaysInMonth; i++) {
    renderedCalendar.push(
      <div key={i + 7} className={checkIfCurrentDay(i)}>
        {i}
      </div>
    );
  }
  return <div className={classes.calendar}>{renderedCalendar}</div>;
};

DrawerCalendar.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default DrawerCalendar;
