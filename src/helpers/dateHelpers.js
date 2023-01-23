import { format } from 'date-fns';

export const months = [
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

export const setDateFormat = (date, type) => {
  if (type === 'date') return format(date, 'yyyy-MM-dd');
  else if (type === 'datetime') {
    const newDate = format(date, 'yyyy-MM-ddHH:mm:ss');
    return newDate.slice(0, 10) + 'T' + newDate.slice(10);
  }
};
