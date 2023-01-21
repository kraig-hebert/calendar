import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const PickerHeader = (props) => {
  const {} = props;
  const classes = useStyles();
  return (
    <div className={classes.pickerHeader}>
      <div className={classes.monthName}>January</div>
      <div className={classes.year}>2023</div>
    </div>
  );
};

PickerHeader.propTypes = {};

export default PickerHeader;
