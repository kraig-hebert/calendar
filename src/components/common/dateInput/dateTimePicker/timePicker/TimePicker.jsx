import React, { forwardRef, useRef, useEffect, useState } from 'react';
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
  const debouncing = useRef(false);

  const classes = useStyles();

  const Selector = forwardRef((props, ref) => {
    const { options } = props;
    const renderedOptions = options.map((option, index) => (
      <div className={classes.selectorOption} key={index}>
        {option}
      </div>
    ));
    return <div className={classes.selector}>{renderedOptions}</div>;
  });

  const handleScrollAction = (event, ref) => {
    event.preventDefault();
    if (debouncing.current) return;
    debouncing.current = true;

    if (event.deltaY < 0) ref.current.scrollTop += 1;
    else ref.current.scrollTop -= 1;
    setTimeout(() => {
      debouncing.current = false;
    }, 100);
  };

  useEffect(() => {
    hourRef.current.addEventListener('wheel', function (event) {
      handleScrollAction(event, hourRef);
    });
    dayPeriodRef.current.addEventListener('wheel', function (event) {
      handleScrollAction(event, dayPeriodRef);
    });
    return () => {
      hourRef.current.removeEventListener('wheel', handleScrollAction);
      dayPeriodRef.current.removeEventListener('wheel', handleScrollAction);
    };
  });

  return (
    <div className={classes.timePicker}>
      <div className={classes.selectorContainer} ref={hourRef}>
        <Selector options={selectorOptions.hourOptions} />
      </div>
      <div className={classes.separator}>:</div>
      <div className={classes.staticDigits}>00</div>
      <div className={classes.selectorContainer} ref={dayPeriodRef}>
        <Selector options={selectorOptions.dayPeriodOptions} />
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
