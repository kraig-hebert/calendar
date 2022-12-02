import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.secondary.main,
    padding: '5px',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.secondary.halfAlpha,
    },
  },
  label: {
    marginLeft: '10px',
  },
}));
