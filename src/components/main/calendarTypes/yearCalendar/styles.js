import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  yearCalendar: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
  },
  miniCalendar: {
    alignSelf: 'center',
    justifySelf: 'center',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthName: {
    display: 'block',
    height: '100%',
    width: '50%',
    backgroundColor: theme.secondary.main,
    color: theme.dark.main,
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: theme.primary.main,
      color: theme.light.main,
      cursor: 'pointer',
    },
  },
  bottomBorder: {
    display: 'block',
    width: '50%',
    height: '1px',
    backgroundColor: theme.dark.main,
  },
}));
