import React from 'react';
import { useStyles } from './styles';

const MonthCalendar = () => {
  const classes = useStyles();
  return <div className={classes.monthCalendar}>Month Calendar</div>;
};

export default MonthCalendar;
