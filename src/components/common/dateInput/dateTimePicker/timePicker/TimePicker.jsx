import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const TimePicker = (props) => {
  const {
    selectedHour,
    setSelectedHour,
    selectedDayPeriod,
    setSelectedDayPeriod,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.timePicker}>
      <div className={classes.selectable}>{selectedHour}</div>
      <div>:</div>
      <div>00</div>
      <div className={classes.selectable}>{selectedDayPeriod}</div>
    </div>
  );
};

TimePicker.propTypes = {
  selectedHour: PropTypes.number,
  setSelectedHour: PropTypes.func,
  selectedDayPeriod: PropTypes.string,
  setSelectedDayPeriod: PropTypes.func,
};

export default TimePicker;
