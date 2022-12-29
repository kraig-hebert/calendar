import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../../../checkBox/CheckBox';
import { useStyles } from './styles';

const CalendarInput = (props) => {
  const { title, checkBoxBackgroundColor, checkColor } = props;
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <CheckBox
        checkBoxBackgroundColor={checkBoxBackgroundColor}
        checkColor={checkColor}
        startChecked={true}
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
