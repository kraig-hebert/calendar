import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  calendar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(7, 30px)',
    width: '80%',
    marginTop: '10px',
    marginBottom: '20px',
    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      cursor: 'default',
    },
  },
  currentDay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    backgroundColor: theme.primary.main,
    color: theme.light.main + ' !important',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.secondary.main,
    },
  },
  notCurrentDay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: theme.secondary.main,
    },
  },
}));
