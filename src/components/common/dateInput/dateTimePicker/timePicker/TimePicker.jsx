import React, { forwardRef, useRef, useEffect } from 'react';
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
    const { options } = props;
    const renderedOptions = options.map((option, index) => (
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

  const scrollUp = (ref) => {
    console.log(ref.current.offsetTop);
    const top = ref.current.offsetTop;
    if (top + 25 >= 0) ref.current.style.top = '0px';
    else ref.current.style.top = `${ref.current.offsetTop + 25}px`;
  };
  const scrollDown = (ref) => {
    console.log(ref.current.offsetTop);
    const top = ref.current.offsetTop;

    if (top - 25 <= -275) ref.current.style.top = '-275px';
    else ref.current.style.top = `${ref.current.offsetTop - 25}px`;
  };

  const scrollAction = (event, ref) => {
    event.preventDefault();
    if (
      event.target.parentElement === ref.current ||
      event.target === ref.current
    ) {
      if (event.deltaY < 0) scrollUp(ref);
      else scrollDown(ref);
    }
  };

  useEffect(() => {
    hourRef.current.addEventListener('wheel', function (event) {
      scrollAction(event, hourRef);
    });
    dayPeriodRef.current.addEventListener('wheel', function (event) {
      scrollAction(event, dayPeriodRef);
    });
    return () => {
      hourRef.current.removeEventListener('wheel', scrollAction);
      dayPeriodRef.current.removeEventListener('wheel', scrollAction);
    };
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
