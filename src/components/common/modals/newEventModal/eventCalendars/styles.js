import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  defaultCalendarRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    height: '50px',
    marginTop: '10px',
    width: '80%',
    '& span': {
      justifySelf: 'center',
      alignSelf: 'center',
    },
  },
  customCalendarRow: (props) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${props.calendarListLength}, 1fr)`,
    height: '50px',
    marginBottom: '10px',
    width: '80%',
    '& span': {
      justifySelf: 'center',
      alignSelf: 'center',
    },
  }),
  calendar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.25rem',
    '& span': {
      marginLeft: '10px',
    },
  },
});
