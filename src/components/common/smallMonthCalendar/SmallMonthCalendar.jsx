import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import { getDay, getDaysInMonth } from 'date-fns';

import { useSelector } from 'react-redux';
import { selectCurrentDate } from '../../../reducers/appSettings';

const SmallMonthCalendar = (props) => {
  const classes = useStyles();
  const { month } = props;
  const date = useSelector(selectCurrentDate);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const numberOfDaysInMonth = getDaysInMonth(date); // returns number of days in month

  return <div></div>;
};

SmallMonthCalendar.propTypes = {
  month: PropTypes.string,
};

export default SmallMonthCalendar;
