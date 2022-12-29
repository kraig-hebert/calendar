import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    height: '30px',
    padding: '0 5px',
    backgroundColor: theme.secondary.main,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.secondary.halfAlpha,
    },
    '&:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
  },
  label: {
    marginLeft: '10px',
  },
}));
