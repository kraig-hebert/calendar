import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth, getWeeksInMonth, setDate } from 'date-fns';

import { setDateFormat } from '../../../helpers/dateHelpers';
import { useStyles } from './styles';
import PickerHeader from './pickerHeader/PickerHeader';

const DatePicker = forwardRef((props, ref) => {
  const { month, year, showPicker, setShowPicker, setValue, type } = props;
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

  const [selectedDate, setSelectedDate] = useState(1);
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

  const handleDayClick = (day) => setSelectedDate(day);

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
          onClick={() => handleDayClick(i)}
          className={classes.day}
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

  useEffect(() => {
    if (type === 'date') {
      setShowPicker(false);
      setValue(
        setDateFormat(
          new Date(selectedYear, months.indexOf(selectedMonth), selectedDate),
          type
        )
      );
    }
  }, [selectedDate]);

  return (
    <div className={classes.picker} ref={ref}>
      <PickerHeader
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setValue={setValue}
      />
      <div className={classes.calendar}>{assembleCalendar()}</div>
    </div>
  );
});

DatePicker.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  showPicker: PropTypes.bool,
  setShowPicker: PropTypes.func,
  setValue: PropTypes.func,
  type: PropTypes.string,
};

export default DatePicker;
