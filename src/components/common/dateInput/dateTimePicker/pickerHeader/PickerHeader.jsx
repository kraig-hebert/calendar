import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TiArrowSortedDown, TiMinus, TiPlus } from 'react-icons/ti';

import { useStyles } from './styles';
import MonthSelector from './monthSelector/MonthSelector';

const PickerHeader = (props) => {
  const { selectedMonth, setSelectedMonth, selectedYear, setSelectedYear } =
    props;
  console.log(selectedMonth);
  const classes = useStyles();

  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleYearDecrement = () => setSelectedYear((prev) => prev - 1);
  const handleYearIncrement = () => setSelectedYear((prev) => prev + 1);

  return (
    <div className={classes.pickerHeader}>
      <div className={classes.selectorContainer}>
        <p>{selectedMonth}</p>
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
  selectedMonth: PropTypes.string,
  setSelectedMonth: PropTypes.func,
  selectedYear: PropTypes.number,
  setSelectedYear: PropTypes.func,
};

export default PickerHeader;
