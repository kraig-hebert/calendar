import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import CheckBox from '../../../../../common/checkBox/CheckBox';

const CalendarInput = (props) => {
  const classes = useStyles();
  const { title, checkBoxBackgroundColor, checkColor } = props;
  return (
    <div className={classes.inputContainer}>
      <CheckBox
        checkBoxBackgroundColor={checkBoxBackgroundColor}
        checkColor={checkColor}
      />
      <span className={classes.label}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </span>
    </div>
  );
};
CalendarInput.propTypes = {
  title: PropTypes.string,
  checkBoxBackgroundColor: PropTypes.string,
  checkColor: PropTypes.string,
};
export default CalendarInput;
