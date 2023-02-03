import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { months } from '../../../../../../helpers/dateHelpers';

const MonthSelector = (props) => {
  const { selectedMonth, setSelectedMonth, optionsOpen, setOptionsOpen } =
    props;
  const classes = useStyles({ display: optionsOpen });

  const handleMonthClick = (e) => {
    setOptionsOpen(false);
    setSelectedMonth(months.indexOf(e.target.textContent));
  };

  const renderedMonthOptions = months.map((month, index) => (
    <div className={classes.monthOption} key={index}>
      <p onClick={handleMonthClick}>{month}</p>
    </div>
  ));

  return <div className={classes.monthSelector}>{renderedMonthOptions}</div>;
};

MonthSelector.propTypes = {
  pickerDate: PropTypes.objectOf(Date),
  setPickerDate: PropTypes.func,
  optionsOpen: PropTypes.bool,
  setOptionsOpen: PropTypes.func,
};

export default MonthSelector;
