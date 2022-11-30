import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  baseDay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
  calendar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(7, 30px)',
    width: '80%',
    marginTop: '10px',
    marginBottom: '20px',
    '& div': {
      extend: 'baseDay',
      cursor: 'default',
    },
  },
  currentDay: {
    extend: 'baseDay',
    backgroundColor: theme.primary.main,
    color: theme.light.main + ' !important',
    cursor: 'pointer !important',
    '&:hover': {
      backgroundColor: theme.secondary.main,
    },
  },
  notCurrentDay: {
    extend: 'baseDay',
    cursor: 'pointer !important',
    '&:hover': {
      backgroundColor: theme.secondary.main,
    },
  },
}));
