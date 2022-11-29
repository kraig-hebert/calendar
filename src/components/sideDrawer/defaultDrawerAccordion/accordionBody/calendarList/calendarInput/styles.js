import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1rem',
    padding: '5px',
    backgroundColor: theme.secondary.main,
    '&:hover': {
      backgroundColor: theme.secondary.halfAlpha,
    },
  },
  label: {
    marginLeft: '10px',
  },
}));
