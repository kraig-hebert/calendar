import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const TimePicker = (props) => {
  const {
    selectedHour,
    setSelectedHour,
    selectedDayPeriod,
    setSelectedDayPeriod,
  } = props;

  const [showHourSelector, setShowHourSelector] = useState(false);
  const [showDayPeriodSelector, setShowDayPeriodSelector] = useState(false);

  const selectorOptions = {
    hourOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dayPeriodOptions: ['AM', 'PM'],
  };

  const handleSelectableClick = (showType) => {
    if (showType === 'hours') setShowHourSelector(true);
    else setShowDayPeriodSelector(true);
  };

  const Selector = (props) => {
    const renderedOptions = props.options.map((option, index) => (
      <div className={classes.selectorOption} key={index}>
        {option}
      </div>
    ));
    return <div className={classes.selector}>{renderedOptions}</div>;
  };

  const classes = useStyles();
  return (
    <div className={classes.timePicker}>
      <div className={classes.selectable}>
        <Selector options={selectorOptions.hourOptions} />
      </div>
      <div>:</div>
      <div>00</div>
      <div className={classes.selectable}>
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
