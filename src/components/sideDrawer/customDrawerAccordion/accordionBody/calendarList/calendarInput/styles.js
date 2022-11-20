import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1rem',
    padding: '5px',
    backgroundColor: 'rgb(120,255,140)',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgb(120,255,100)',
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
    color: 'rgb(7,82,18)',
    '& *': {
      margin: 'auto 5px',
    },
  },
  label: {
    marginLeft: '10px',
  },
});
