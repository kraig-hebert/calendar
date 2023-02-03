import React from 'react';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth, getWeeksInMonth } from 'date-fns';

import { months, days } from '../../../../../helpers/dateHelpers';
import { useStyles } from './styles';

const CalendarPicker = (props) => {
  const { pickerDate, setSelectedDate, selectedMonth, selectedYear } = props;

  const classes = useStyles({
    rowTotal: getWeeksInMonth(new Date(selectedYear, months.selectedMonth, 1)),
  });
  const numberOfDaysInMonth = getDaysInMonth(
    new Date(selectedYear, selectedMonth, 1)
  );

  const handleDayClick = (day) => setSelectedDate(day);

  const checkIfSelectedDay = (day) => {
    if (
      pickerDate.getDate() === day &&
      pickerDate.getMonth() === selectedMonth &&
      pickerDate.getFullYear() === selectedYear
    )
      return classes.currentDay;
    else return classes.day;
  };

  console.log(pickerDate);
  const setDatesOnCalendar = (renderedCalendar) => {
    const startDayOfMonth = getDay(new Date(selectedYear, selectedMonth, 1));
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
  pickerDate: PropTypes.objectOf(Date),
  setSelectedDate: PropTypes.func,
  selectedMonth: PropTypes.number,
  selectedYear: PropTypes.number,
};

export default CalendarPicker;
