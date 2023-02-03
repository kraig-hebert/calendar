import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { setDateFormat } from '../../../../helpers/dateHelpers';
import PickerHeader from './pickerHeader/PickerHeader';
import CalendarPicker from './calendarPicker/CalendarPicker';
import TimePicker from './timePicker/TimePicker';

const DatePicker = forwardRef((props, ref) => {
  const { value, showPicker, setShowPicker, setValue, type } = props;
  const classes = useStyles({ display: showPicker });

  const clearPicker = () => {
    setShowPicker(false);
  };

  const getHoursForDisplay = (hours) => {
    if (hours > 12) return hours - 12;
    else if (hours < 12 && hours > 0) return hours;
    return 12;
  };

  const getHoursForSubmit = () => {
    console.log(selectedHour);
    if (selectedHour === 12) {
      if (selectedDayPeriod === 'AM') return 0;
      else if (selectedDayPeriod === 'PM') return 12;
    }
    if (selectedDayPeriod === 'AM') return selectedHour;
    else if (selectedDayPeriod === 'PM') return selectedHour + 12;
  };

  const getDayPeriodForDisplay = (hours) => {
    if (hours < 12) return 'AM';
    else return 'PM';
  };

  const [selectedDate, setSelectedDate] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [selectedHour, setSelectedHour] = useState();
  const [selectedDayPeriod, setSelectedDayPeriod] = useState();
  const [pickerDate, setPickerDate] = useState();

  const handleSubmit = () => {
    if (type === 'date') {
      setValue(setDateFormat(pickerDate, type));
      clearPicker();
    } else if (type === 'datetime') {
      const newDate = new Date(
        pickerDate.getFullYear(),
        pickerDate.getMonth(),
        pickerDate.getDate(),
        getHoursForSubmit()
      );
      setValue(setDateFormat(newDate, type));
      clearPicker();
    }
  };

  useEffect(() => {
    setPickerDate(new Date(selectedYear, selectedMonth, selectedDate));
  }, [selectedDate, setPickerDate]);

  useEffect(() => {
    setSelectedDate(value.getDate());
    setSelectedMonth(value.getMonth());
    setSelectedYear(value.getFullYear());
    setSelectedHour(getHoursForDisplay(value.getHours()));
    setSelectedDayPeriod(getDayPeriodForDisplay(value.getHours()));
  }, [value]);

  return (
    <div className={classes.picker} ref={ref}>
      <PickerHeader
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <CalendarPicker
        pickerDate={pickerDate}
        setSelectedDate={setSelectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />
      {type === 'datetime' && (
        <TimePicker
          pickerDate={pickerDate}
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
  value: PropTypes.objectOf(Date),
  showPicker: PropTypes.bool,
  setShowPicker: PropTypes.func,
  setValue: PropTypes.func,
  type: PropTypes.string,
};

export default DatePicker;
