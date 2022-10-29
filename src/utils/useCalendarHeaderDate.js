import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format, startOfWeek, endOfWeek, addMonths, getMonth } from 'date-fns';
import {
  selectCurrentDate,
  selectCurrentCalendarSpread,
} from '../reducers/appSettings';

const useCalendarHeaderDate = () => {
  const date = useSelector(selectCurrentDate);
  const [headerDate, setHeaderDate] = useState(format(date, 'MMMM y')); // format: January 2022
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);

  const headerFormat = {
    day: format(date, 'MMMM d, y'),
    week: `${format(startOfWeek(date), 'MMM d, y')} - ${format(
      endOfWeek(date),
      'MMMM d, y'
    )}`,
    month: format(date, 'MMMM y'),
    year: format(date, 'y'),
    schedule: `${format(date, 'MMM y')} - ${format(
      addMonths(date, 6),
      'MMM y'
    )}`,
  };

  useEffect(() => {
    setHeaderDate(headerFormat[currentCalendarSpread]);
  }, [currentCalendarSpread, date]);
  return headerDate;
};

export default useCalendarHeaderDate;
