import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaRegCalendarAlt } from 'react-icons/fa';

import { getDateFromFormat } from '../../../helpers/dateHelpers';
import { useStyles } from './styles';
import DateTimePicker from './dateTimePicker/DateTimePicker';

const DateInput = (props) => {
  const { value, setValue, type } = props;
  const valueAsDateObject = getDateFromFormat(value, type);
  const classes = useStyles();
  const calendarRef = useRef();
  const iconRef = useRef();
  const [showPicker, setShowPicker] = useState(false);

  const handleIconClick = () => setShowPicker(true);
  const setInputType = () => {
    return type === 'date' ? 'date' : 'datetime-local';
  };

  function handleDocumentClick(event) {
    if (
      !calendarRef.current.contains(event.target) &&
      event.target !== iconRef.current
    ) {
      setShowPicker(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className={classes.inputContainer}>
      <input
        type={setInputType()}
        className={classes.dateInput}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {showPicker && (
        <DateTimePicker
          type={type}
          year={valueAsDateObject.getFullYear()}
          month={valueAsDateObject.getMonth()}
          day={valueAsDateObject.getDate()}
          setValue={setValue}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
          ref={calendarRef}
        />
      )}
      <FaRegCalendarAlt id="datePickerIcon" className={classes.icon} />
      <div
        className={classes.iconCover}
        ref={iconRef}
        onClick={handleIconClick}
      ></div>
    </div>
  );
};

DateInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  type: PropTypes.string,
};

export default DateInput;
