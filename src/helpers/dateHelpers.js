import { format } from 'date-fns';

export const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

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

export const getDateFromFormat = (value, type) => {
  if (type === 'date') {
    const dateValue = value.split('-');
    return new Date(dateValue[0], dateValue[1] - 1, dateValue[2]);
  } else return new Date(value);
};
