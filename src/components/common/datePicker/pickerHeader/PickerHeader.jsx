import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TiArrowSortedDown } from 'react-icons/ti';

import { useStyles } from './styles';
import MonthSelector from './monthSelector/MonthSelector';

const PickerHeader = (props) => {
  const { selectedMonth, setSelectedMonth, selectedYear, setselectedYear } =
    props;
  const classes = useStyles();

  const [optionsOpen, setOptionsOpen] = useState(false);

  return (
    <div className={classes.pickerHeader}>
      <div className={classes.selectorContainer}>
        <p>{selectedMonth}</p>
        <TiArrowSortedDown
          className={classes.downArrow}
          onClick={() => setOptionsOpen(true)}
        />
        <MonthSelector
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          optionsOpen={optionsOpen}
          setOptionsOpen={setOptionsOpen}
        />
      </div>
      <div>
        {selectedYear}
        <TiArrowSortedDown />
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
