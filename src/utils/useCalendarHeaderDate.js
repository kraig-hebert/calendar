import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { format, startOfWeek, endOfWeek, addMonths } from 'date-fns';

import {
  selectCurrentDate,
  selectCurrentCalendarSpread,
} from '../reducers/appSettings';

/* 
  returns headerDate with updated format and date when either 
  the current date has changed or type of calendar is changed   
*/
const useCalendarHeaderDate = () => {
  const date = useSelector(selectCurrentDate);
  const [headerDate, setHeaderDate] = useState(format(date, 'MMMM y')); // format: ex. January 2022
  const currentCalendarSpread = useSelector(selectCurrentCalendarSpread);

  /* 
    returns header date in the proper format based on currentCalendarSpread
  */
  const headerFormat = useMemo(() => {
    return {
      day: format(date, 'EEEE MMMM d, y'),
      week: `${format(startOfWeek(date), 'MMM d')} - ${format(
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
  }, [date]);

  useEffect(() => {
    setHeaderDate(headerFormat[currentCalendarSpread]);
  }, [currentCalendarSpread, headerFormat]);
  return headerDate;
};

export default useCalendarHeaderDate;
