import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  calendarRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '25%',
    height: '100%',
    marginBottom: '10px',
    backgroundColor: theme.secondary.main,
    borderBottomLeftRadius: '20px',
    borderRight: '1px solid ' + theme.primary.main,
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
