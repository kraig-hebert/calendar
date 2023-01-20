import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegCalendarAlt } from 'react-icons/fa';

import { useStyles } from './styles';
import DatePicker from '../datePicker/DatePicker';

const DateInput = (props) => {
  const { value, setValue, type } = props;
  const classes = useStyles();
  const [showPicker, setShowPicker] = useState(false);

  const handleIconClick = () => setShowPicker(true);
  const setInputType = () => {
    return type === 'date' ? 'date' : 'datetime-local';
  };

  return (
    <div className={classes.inputContainer}>
      <input
        type={setInputType()}
        className={classes.dateInput}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FaRegCalendarAlt className={classes.icon} onClick={handleIconClick} />
      <DatePicker show={showPicker} />
    </div>
  );
};

DateInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  type: PropTypes.string,
};

export default DateInput;
