import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  calendarRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'rgb(120,255,140)',
    marginBottom: '10px',
    borderBottom: '1px solid rgb(7,82,18)',
    '& div': {
      margin: '10px',
    },
    '& span': {
      justifySelf: 'center',
      alignSelf: 'center',
    },
  },
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
