import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const TimePicker = (props) => {
  const {} = props;
  const classes = useStyles();
  return <div className={classes.timePicker}>TimePicker</div>;
};

TimePicker.propTypes = {};

export default TimePicker;
