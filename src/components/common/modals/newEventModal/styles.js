import { createUseStyles } from 'react-jss';

const getColumns = (calendarListLength) => {
  if (calendarListLength) return `repeat(${calendarListLength}, 1fr)`;
  else return 'repeat(4,1fr)';
};

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
    '& input': {
      margin: '25px',
      padding: '5px',
      border: '1px solid rgb(7,82,18)',
      borderRadius: '2px',
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
  }),
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottom: '1px solid rgb(7,82,18)',
  },
  closeIcon: {
    cursor: 'pointer',
    fontSize: '2rem',
    color: 'rgb(7,82,18)',
    margin: '10px',
  },
  defaultCalendarRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    height: '50px',
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
    '& span': {
      marginLeft: '10px',
    },
  },
});
