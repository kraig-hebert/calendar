import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TiArrowSortedDown, TiMinus, TiPlus } from 'react-icons/ti';

import { useStyles } from './styles';
import { months } from '../../../../../helpers/dateHelpers';
import MonthSelector from './monthSelector/MonthSelector';

const PickerHeader = (props) => {
  const { selectedMonth, setSelectedMonth, selectedYear, setSelectedYear } =
    props;
  const classes = useStyles();

  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleYearIncrement = () => setSelectedYear((prev) => prev + 1);
  const handleYearDecrement = () => setSelectedYear((prev) => prev - 1);

  return (
    <div className={classes.pickerHeader}>
      <div className={classes.selectorContainer}>
        <p>{months[selectedMonth]}</p>
        <TiArrowSortedDown
          className={classes.icon}
          onClick={() => setOptionsOpen(true)}
        />
        <MonthSelector
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          optionsOpen={optionsOpen}
          setOptionsOpen={setOptionsOpen}
        />
      </div>
      <div className={classes.selectorContainer}>
        <TiMinus className={classes.icon} onClick={handleYearDecrement} />
        {selectedYear}
        <TiPlus className={classes.icon} onClick={handleYearIncrement} />
      </div>
    </div>
  );
};

PickerHeader.propTypes = {
  selectedMonth: PropTypes.number,
  setSelectedMonth: PropTypes.func,
  selectedYear: PropTypes.number,
  setSelectedYear: PropTypes.func,
};

export default PickerHeader;
