import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1rem',
    padding: '5px',
    backgroundColor: theme.secondary.main,
    position: 'relative',
    '&:hover': {
      backgroundColor: theme.secondary.halfAlpha,
    },
    '&:hover > div': {
      display: 'block',
      cursor: 'pointer',
    },
  },
  optionsContainer: {
    display: 'none',
    position: 'absolute',
    right: '15px',
    top: '25%',
    color: theme.primary.main,
    '& *': {
      margin: 'auto 5px',
    },
  },
  label: {
    marginLeft: '10px',
  },
}));
