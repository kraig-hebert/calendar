import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { months, setDateFormat } from '../../../../helpers/dateHelpers';
import PickerHeader from './pickerHeader/PickerHeader';
import CalendarPicker from './calendarPicker/CalendarPicker';
import TimePicker from './timePicker/TimePicker';

const DatePicker = forwardRef((props, ref) => {
  const { date, showPicker, setShowPicker, setValue, type } = props;
  const classes = useStyles({ display: showPicker });

  const clearPicker = () => {
    const date = new Date();
    setShowPicker(false);
    setSelectedDate(date.getDate());
    setSelectedMonth(months[date.getMonth()]);
    setSelectedYear(date.getFullYear());
  };

  const getHoursForDisplay = (hours) => {
    if (hours > 11) return hours - 11;
    else return hours + 1;
  };

  const getDayPeriodForDisplay = (hours) => {
    if (hours < 12) return 'a.m.';
    else return 'p.m';
  };

  const [selectedDate, setSelectedDate] = useState(date.getDate());
  const [selectedMonth, setSelectedMonth] = useState(months[date.getMonth()]);
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());
  const [selectedHour, setSelectedHour] = useState(
    getHoursForDisplay(date.getHours())
  );
  const [selectedDayPeriod, setSelectedDayPeriod] = useState(
    getDayPeriodForDisplay(date.getHours())
  );

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
      {type === 'datetime' && (
        <TimePicker
          selectedHour={selectedHour}
          setSelectedHour={setSelectedHour}
          selectedDayPeriod={selectedDayPeriod}
          setSelectedDayPeriod={setSelectedDayPeriod}
        />
      )}
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
});

DatePicker.propTypes = {
  date: PropTypes.objectOf(Date),
  showPicker: PropTypes.bool,
  setShowPicker: PropTypes.func,
  setValue: PropTypes.func,
  type: PropTypes.string,
};

export default DatePicker;
