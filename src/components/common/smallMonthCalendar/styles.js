import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  calendar: {
    marginTop: '10px',
    width: '80%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(7, 30px)',
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
    backgroundColor: theme.primary.main,
    color: theme.light.main + ' !important',
    borderRadius: '50%',
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
