import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@keyframes dateMoveIn': {
    '0%': { opacity: '0', width: '0' },
    '100%': { opacity: '1', width: '100%' },
  },
  '@keyframes dateMoveOut': {
    '0%': { opacity: '1', width: '100%' },
    '100%': { opacity: '0', width: '0' },
  },
  timeContainer: {
    display: 'flex',
    width: '100%',
    height: '175px',
    position: 'relative',
  },
  dateOrTimeContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    animationDuration: '.5s',
  },
  dateContainer: (props) => ({
    extend: 'dateOrTimeContainer',
    right: '0',
    animationName: props.dateContainer.animation,
    opacity: props.dateContainer.opacity,
    width: props.dateContainer.width,
  }),
  dateTimeContainer: (props) => ({
    extend: 'dateOrTimeContainer',
    left: '0',
    animationName: props.dateTimeContainer.animation,
    opacity: props.dateTimeContainer.opacity,
    width: props.dateTimeContainer.width,
  }),
  dateInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    '& p': {
      color: theme.primary.main,
    },
  },
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
