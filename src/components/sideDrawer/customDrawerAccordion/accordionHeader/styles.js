import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: '40px',
    padding: {
      left: '10px',
      right: '10px',
    },
    backgroundColor: theme.primary.main,
    color: theme.light.main,
    fontWeight: '800',
    borderRadius: '5px',
  },
  iconGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: theme.secondary.main,
    fontSize: '1.5rem',
    fontWeight: '800',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  shrunkIcon: {
    color: theme.secondary.main,
    paddingRight: '5px',
    fontSize: '1rem',
    fontWeight: '800',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
