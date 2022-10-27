import React from 'react';
import SmallMonthCalendar from '../../../common/smallMonthCalendar/SmallMonthCalendar';
import { useStyles } from './styles';

const YearCalendar = () => {
  const classes = useStyles();
  return (
    <div className={classes.yearCalendar}>
      <SmallMonthCalendar year={2022} month={9} />
    </div>
  );
};

export default YearCalendar;
