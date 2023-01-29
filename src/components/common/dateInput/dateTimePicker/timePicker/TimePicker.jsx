import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const TimePicker = (props) => {
  const {
    selectedHour,
    setSelectedHour,
    selectedDayPeriod,
    setSelectedDayPeriod,
  } = props;

  const selectorOptions = {
    hourOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dayPeriodOptions: ['AM', 'PM'],
  };

  const hourRef = useRef();
  const dayPeriodRef = useRef();

  const classes = useStyles();

  const Selector = forwardRef((props, ref) => {
    const renderedOptions = props.options.map((option, index) => (
      <div className={classes.selectorOption} key={index}>
        {option}
      </div>
    ));
    return (
      <div className={classes.selector} ref={ref}>
        {renderedOptions}
      </div>
    );
  });

  return (
    <div className={classes.timePicker}>
      <div className={classes.selectorContainer}>
        <Selector options={selectorOptions.hourOptions} ref={hourRef} />
      </div>
      <div className={classes.separator}>:</div>
      <div className={classes.staticDigits}>00</div>
      <div className={classes.selectorContainer}>
        <Selector
          options={selectorOptions.dayPeriodOptions}
          ref={dayPeriodRef}
        />
      </div>
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
