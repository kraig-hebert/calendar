import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  defaultContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    height: '30px',
    padding: '0 5px',
    backgroundColor: theme.secondary.main,
    fontSize: '1rem',
    '&:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
  },
  customContainer: {
    extend: 'defaultContainer',
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
    right: '10px',
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
