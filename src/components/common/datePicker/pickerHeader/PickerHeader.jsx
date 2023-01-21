import React from 'react';
import PropTypes from 'prop-types';
import { TiArrowSortedDown } from 'react-icons/ti';

import { useStyles } from './styles';

const PickerHeader = (props) => {
  const {} = props;
  const classes = useStyles();

  const month = [
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
  return (
    <div className={classes.pickerHeader}>
      <div>
        January
        <TiArrowSortedDown />
      </div>
      <div>
        2023
        <TiArrowSortedDown />
      </div>
    </div>
  );
};

PickerHeader.propTypes = {};

export default PickerHeader;
