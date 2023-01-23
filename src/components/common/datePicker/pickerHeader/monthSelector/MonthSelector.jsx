import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const MonthSelector = (props) => {
  const {
    selectedMonth,
    setSelectedMonth,
    optionsOpen,
    setOptionsOpen,
    setValue,
  } = props;
  const classes = useStyles({ display: optionsOpen });

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleMonthClick = (e) => {
    console.log(e);
    setOptionsOpen(false);
    setSelectedMonth(e.target.textContent);
    setValue();
  };

  const renderedMonthOptions = months.map((month, index) => (
    <div className={classes.monthOption} key={index}>
      <p onClick={handleMonthClick}>{month}</p>
    </div>
  ));

  return <div className={classes.monthSelector}>{renderedMonthOptions}</div>;
};

MonthSelector.propTypes = {
  activeMonth: PropTypes.string,
  setActiveMonth: PropTypes.func,
  optionsOpen: PropTypes.bool,
  setOptionsOpen: PropTypes.func,
  setValue: PropTypes.func,
};

export default MonthSelector;
