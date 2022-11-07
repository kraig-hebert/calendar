import React from 'react';
import { useDispatch } from 'react-redux';
import SmallMonthCalendar from '../../../common/smallMonthCalendar/SmallMonthCalendar';
import MonthCalendar from '../monthCalendar/MonthCalendar';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCurrentDate,
  calendarMonthSelected,
} from '../../../../reducers/appSettings';

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
  const currentDate = useSelector(selectCurrentDate);
  const today = new Date();
  const handleMonthClick = (month) => {
    dispatch(
      calendarMonthSelected(
        new Date(currentDate.getFullYear(), month, 1).toJSON()
      )
    );
  };

  const renderedCalendarWithName = monthNames.map((month, index) => {
    return (
      <div key={index} className={classes.miniCalendar}>
        <Link
          to="/month"
          element={<MonthCalendar />}
          className={classes.monthName}
        >
          <p onClick={(e) => handleMonthClick(index)}>{month}</p>
        </Link>

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
