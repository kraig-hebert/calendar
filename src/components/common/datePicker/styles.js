import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  calendar: {
    display: 'none',
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
  day: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer !important',
    '&:hover': {
      backgroundColor: theme.secondary.main,
    },
  },
}));
