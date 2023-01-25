import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { months } from '../../../helpers/dateHelpers';
import PickerHeader from './pickerHeader/PickerHeader';
import CalendarPicker from './calendarPicker/CalendarPicker';

const DatePicker = forwardRef((props, ref) => {
  const { day, month, year, showPicker, setShowPicker, setValue, type } = props;
  const classes = useStyles({ display: showPicker });

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

  return (
    <div className={classes.picker} ref={ref}>
      <PickerHeader
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <CalendarPicker
        showPicker={showPicker}
        setValue={setValue}
        type={type}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        clearPicker={clearPicker}
      />
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
