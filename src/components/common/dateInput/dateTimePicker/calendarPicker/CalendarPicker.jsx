import React from 'react';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth, getWeeksInMonth } from 'date-fns';

import { months } from '../../../../../helpers/dateHelpers';
import { useStyles } from './styles';

const CalendarPicker = (props) => {
  const { selectedDate, setSelectedDate, selectedMonth, selectedYear } = props;
  const currentDate = new Date();

  const setCalendarRows = () =>
    getWeeksInMonth(new Date(selectedYear, months.indexOf(selectedMonth), 1));
  const classes = useStyles({
    rowTotal: setCalendarRows(),
  });
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(
    new Date(selectedYear, months.indexOf(selectedMonth), 1)
  );

  const handleDayClick = (day) => setSelectedDate(day);
  const checkIfSelectedDay = (day) => {
    if (selectedDate === day) {
      if (
        months.indexOf(selectedMonth) === currentDate.getMonth() &&
        selectedYear === currentDate.getFullYear()
      )
        return classes.currentDay;
      else return classes.day;
    } else return classes.day;
  };

  const setDatesOnCalendar = (renderedCalendar) => {
    const startDayOfMonth = getDay(
      new Date(selectedYear, months.indexOf(selectedMonth), 1)
    );
    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i + 7}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div
          key={i + 6 + startDayOfMonth}
          onClick={() => handleDayClick(i)}
          className={checkIfSelectedDay(i)}
        >
          {i}
        </div>
      );
    }
    return renderedCalendar;
  };

  const assembleCalendar = () => {
    const renderedCalendarWithHeader = days.map((day, index) => (
      <div key={index} className={classes.headerDay}>
        {day}
      </div>
    ));
    return setDatesOnCalendar(renderedCalendarWithHeader);
  };

  return <div className={classes.calendar}>{assembleCalendar()}</div>;
};

CalendarPicker.propTypes = {
  selectedDate: PropTypes.number,
  setSelectedDate: PropTypes.func,
  selectedMonth: PropTypes.string,
  selectedYear: PropTypes.number,
};

export default CalendarPicker;
