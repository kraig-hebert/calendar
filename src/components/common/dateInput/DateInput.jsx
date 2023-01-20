import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCalendarAlt } from 'react-icons/fa';

import { useStyles } from './styles';
import DatePicker from '../datePicker/DatePicker';

const DateInput = (props) => {
  const { value, setValue } = props;
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <input
        type="date"
        name="date"
        id="date"
        className={classes.dateInput}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FaRegCalendarAlt className={classes.icon} />
      <DatePicker />
    </div>
  );
};

DateInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default DateInput;
