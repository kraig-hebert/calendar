import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: {
      left: '10px',
      right: '10px',
    },
    alignItems: 'center',
    width: '80%',
    height: '40px',
    backgroundColor: theme.primary.main,
    color: '#fff',
    fontWeight: '800',
    borderRadius: '5px',
  },
  icon: {
    color: theme.secondary.main,
    fontSize: '1.5rem',
    fontWeight: '800',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
