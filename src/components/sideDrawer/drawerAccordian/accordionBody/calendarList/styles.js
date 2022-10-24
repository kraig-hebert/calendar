import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  calendarInput: {
    display: 'block',
    width: '100%',
    fontSize: '1rem',
    padding: '5px 0',
    '&:hover': {
      backgroundColor: '#F1F3F4',
    },
  },
});
