import React, { useState } from 'react';
import SmallMonthCalendar from '../../../common/smallMonthCalendar/SmallMonthCalendar';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from '../../../../reducers/appSettings';

const YearCalendar = () => {
  const monthNames = [
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
  const classes = useStyles();
  const currentDate = useSelector(selectCurrentDate);
  const [selectedYear, seteSelectedYear] = useState(currentDate.getFullYear());

  const renderedCalendarWithName = monthNames.map((month, index) => {
    return (
      <div key={index} className={classes.miniCalendar}>
        <p>{month}</p>
        <div className={classes.bottomBorder}></div>
        <SmallMonthCalendar
          year={selectedYear}
          month={index}
          date={currentDate}
        />
      </div>
    );
  });

  return <div className={classes.yearCalendar}>{renderedCalendarWithName}</div>;
};

export default YearCalendar;
