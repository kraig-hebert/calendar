import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth, getWeeksInMonth } from 'date-fns';

import { useStyles } from './styles';
import PickerHeader from './pickerHeader/PickerHeader';

const DatePicker = forwardRef((props, ref) => {
  const { month, year, showPicker } = props;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[month]);
  const [selectedYear, setSelectedYear] = useState(year);

  const setCalendarRows = () =>
    getWeeksInMonth(new Date(year, months.indexOf(selectedMonth), 1));
  const classes = useStyles({
    display: showPicker,
    rowTotal: setCalendarRows(),
  });
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(
    new Date(year, months.indexOf(selectedMonth), 1)
  );

  const handleDayClick = () => {};

  const setDatesOnCalendar = (renderedCalendar) => {
    const startDayOfMonth = getDay(
      new Date(year, months.indexOf(selectedMonth), 1)
    );
    for (let i = 0; i < startDayOfMonth; i++) {
      renderedCalendar.push(<div key={i + 7}></div>);
    }
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      renderedCalendar.push(
        <div
          key={i + 6 + startDayOfMonth}
          onClick={(e) => handleDayClick(e, i)}
          className={classes.day}
        >
          {i}
        </div>
      );
    }
    return renderedCalendar;
  };

  const assembleCalendar = () => {
    console.log('assemble');
    const renderedCalendarWithHeader = days.map((day, index) => (
      <div key={index}>{day}</div>
    ));
    return setDatesOnCalendar(renderedCalendarWithHeader);
  };

  return (
    <div className={classes.picker} ref={ref}>
      <PickerHeader
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <div className={classes.calendar}>{assembleCalendar()}</div>
    </div>
  );
});

DatePicker.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  showPicker: PropTypes.bool,
};

export default DatePicker;
