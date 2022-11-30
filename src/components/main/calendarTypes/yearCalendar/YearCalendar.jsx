import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import SmallMonthCalendar from '../../../common/smallMonthCalendar/SmallMonthCalendar';
import {
  selectCurrentDate,
  calendarMonthSelected,
} from '../../../../reducers/appSettings';
import { useStyles } from './styles';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = useSelector(selectCurrentDate);
  const today = new Date();
  const handleMonthClick = (month) => {
    const newDate = new Date(currentDate.getFullYear(), month, 1);
    dispatch(calendarMonthSelected(newDate));
    navigate(`/month/${format(newDate, 'MM-dd-yy')}`);
  };

  const renderedCalendarWithName = monthNames.map((month, index) => {
    return (
      <div key={index} className={classes.miniCalendar}>
        <p
          className={classes.monthName}
          onClick={(e) => handleMonthClick(index)}
        >
          {month}
        </p>
        <div className={classes.bottomBorder}></div>
        <SmallMonthCalendar
          year={currentDate.getFullYear()}
          month={index}
          date={today}
        />
      </div>
    );
  });

  return <div className={classes.yearCalendar}>{renderedCalendarWithName}</div>;
};

export default YearCalendar;
