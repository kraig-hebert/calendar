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
    backgroundColor: theme.primary.main,
    width: '80%',
    height: '40px',
    color: '#fff',
    fontWeight: '800',
    borderRadius: '5px',
  },
  icon: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: theme.secondary.main,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
