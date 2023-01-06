import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  calendarRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '10px',
    backgroundColor: theme.secondary.main,
    borderBottom: '1px solid ' + theme.primary.main,
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
}));
