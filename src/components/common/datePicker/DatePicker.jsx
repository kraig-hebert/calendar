import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth, getWeeksInMonth, setDate } from 'date-fns';

import { setDateFormat } from '../../../helpers/dateHelpers';
import { useStyles } from './styles';
import PickerHeader from './pickerHeader/PickerHeader';
import { selectCurrentDate } from '../../../reducers/appSettings';

const DatePicker = forwardRef((props, ref) => {
  const { day, month, year, showPicker, setShowPicker, setValue, type } = props;
  const currentDate = new Date();
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

  const clearPicker = () => {
    const date = new Date();
    setShowPicker(false);
    setSelectedDate(date.getDate());
    setSelectedMonth(months[date.getMonth()]);
    setSelectedYear(date.getFullYear());
  };

  const [selectedDate, setSelectedDate] = useState(day);
  const [selectedMonth, setSelectedMonth] = useState(months[month]);
  const [selectedYear, setSelectedYear] = useState(year);

  const setCalendarRows = () =>
    getWeeksInMonth(new Date(selectedYear, months.indexOf(selectedMonth), 1));
  const classes = useStyles({
    display: showPicker,
    rowTotal: setCalendarRows(),
  });
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(
    new Date(selectedYear, months.indexOf(selectedMonth), 1)
  );

  const handleDayClick = (day) => {
    if (type === 'date') {
      setValue(
        setDateFormat(
          new Date(selectedYear, months.indexOf(selectedMonth), day),
          type
        )
      );
      clearPicker();
    } else setSelectedDate(day);
  };
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
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  showPicker: PropTypes.bool,
  setShowPicker: PropTypes.func,
  setValue: PropTypes.func,
  type: PropTypes.string,
};

export default DatePicker;
