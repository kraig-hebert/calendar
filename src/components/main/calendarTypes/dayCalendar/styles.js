import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  dayCalendar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10px',
    overflow: 'scroll',
  },
  timeBlock: {
    display: 'block',
    position: 'relative',
    width: '90%',
    height: '40px',
    border: '1px solid #000',
    '&:not(:last-of-type)': {
      borderBottom: '0',
    },
  },
  time: {
    display: 'block',
    position: 'absolute',
    left: '-35px',
    bottom: '-5px',
  },
});
