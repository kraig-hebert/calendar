import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { months, setDateFormat } from '../../../../helpers/dateHelpers';
import PickerHeader from './pickerHeader/PickerHeader';
import CalendarPicker from './calendarPicker/CalendarPicker';
import TimePicker from './timePicker/TimePicker';

const DatePicker = forwardRef((props, ref) => {
  const { day, month, year, setShowPicker, setValue, type } = props;
  const classes = useStyles();

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

  const handleSubmit = () => {
    if (type === 'date') {
      setValue(
        setDateFormat(
          new Date(selectedYear, months.indexOf(selectedMonth), selectedDate),
          type
        )
      );
      clearPicker();
    }
  };

  return (
    <div className={classes.picker} ref={ref}>
      <PickerHeader
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <CalendarPicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />
      {type === 'datetime' && <TimePicker />}
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
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
