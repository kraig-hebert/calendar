import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@keyframes fadeIn': {
    from: { opacity: '0', zIndex: '-1' },
    to: { opacity: '1', zIndex: '2' },
  },
  '@keyframes fadeOut': {
    from: { opacity: '1', zIndex: '2' },
    to: { opacity: '0', zIndex: '-1' },
  },
  modal: (props) => ({
    display: 'flex',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: props.zIndex,
    opacity: props.opacity,
    animationName: props.animation,
    animationDuration: '.5s',
  }),
  modalContent: (props) => ({
    backgroundColor: '#fff',
    margin: 'auto',
    width: '30%',
    border: '1px solid rgb(7,82,18)',
    borderRadius: '20px',
    opacity: props.opacity,
    animationName: props.animation,
    animationDuration: '.5s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(120,255,140)',
    width: '100%',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottom: '1px solid rgb(7,82,18)',
  },
  closeIcon: {
    cursor: 'pointer',
    fontSize: '1.75rem',
    color: 'rgb(7,82,18)',
    margin: '5px',
  },
  titleInput: {
    marginTop: '25px',
    padding: '5px',
    border: '1px solid rgb(7,82,18)',
    borderRadius: '10px',
    width: '80%',
    height: '35px',
    fontSize: '1.75rem',
    '&:active, &:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      paddingLeft: '10px',
      color: 'rgb(7,82,18)',
    },
  },
  defaultCalendarRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    height: '50px',
    marginTop: '10px',
    width: '80%',
    '& span': {
      justifySelf: 'center',
      alignSelf: 'center',
    },
  },
  customCalendarRow: (props) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${props.calendarListLength}, 1fr)`,
    height: '50px',
    marginBottom: '10px',
    width: '80%',
    '& span': {
      justifySelf: 'center',
      alignSelf: 'center',
    },
  }),
  calendar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.25rem',
    '& span': {
      marginLeft: '10px',
    },
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '200px',
  },
  dateInput: {
    margin: '10px 0',
    padding: '5px',
    border: '1px solid rgb(7,82,18)',
    borderRadius: '10px',
    width: '50%',
    height: '35px',
    fontSize: '1.75rem',
    color: 'rgb(7,82,18)',
    '&::-webkit-calendar-picker-indicator': {
      filter: 'invert(1)',
      cursor: 'pointer',
    },
    '&:active, &:focus': {
      outline: 'none',
    },
  },
});
