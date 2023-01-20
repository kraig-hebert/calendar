import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  inputContainer: {
    position: 'relative',
    width: '60%',
    height: '100%',
  },
  dateInput: {
    width: '100%',
    height: '35px',
    margin: '10px 0',
    padding: '5px',
    border: '1px solid ' + theme.primary.main,
    borderRadius: '10px',
    fontSize: '1.25rem',
    '&::-webkit-calendar-picker-indicator': {
      filter: 'invert(1)',
      pointerEvents: 'none',
    },
    '&:active, &:focus': {
      outline: 'none',
    },
  },
  icon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: theme.primary.main,
  },
}));
