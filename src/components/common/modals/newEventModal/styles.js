import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@keyframes fadeIn': {
    '0%': { opacity: '0', zIndex: '-1' },
    '50%': { opacity: '0', zIndex: '2' },
    '100%': { opacity: '1', zIndex: '2' },
  },
  '@keyframes fadeOut': {
    '0%': { opacity: '1', zIndex: '2' },
    '50%': { opacity: '0', zIndex: '2' },
    '100%': { opacticy: '0', zIndex: '-1' },
  },
  '@keyframes dateMoveIn': {
    '0%': { opacity: '0', width: '0' },
    '100%': { opacity: '1', width: '100%' },
  },
  '@keyframes dateMoveOut': {
    '0%': { opacity: '1', width: '100%' },
    '100%': { opacity: '0', width: '0' },
  },
  modal: (props) => ({
    display: 'flex',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: props.modal.zIndex,
    opacity: props.modal.opacity,
    animationName: props.modal.animation,
    animationDuration: '.5s',
  }),
  modalContent: (props) => ({
    backgroundColor: '#fff',
    margin: 'auto',
    width: '30%',
    border: '1px solid rgb(7,82,18)',
    borderRadius: '20px',
    zIndex: props.modal.zIndex,

    opacity: props.modal.opacity,
    animationName: props.modal.animation,
    animationDuration: '.55s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(7,82,18)',
    width: '100%',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottom: '1px solid rgb(7,82,18)',
    padding: '10px 0',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '2rem',
    color: 'rgb(120,255,140)',
    margin: '10px',
  },
  titleInput: {
    padding: '5px 15px',
    border: '1px solid rgb(7,82,18)',
    borderRadius: '10px',
    width: '60%',
    height: '35px',
    fontSize: '1.75rem',
    '&:active, &:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      paddingLeft: '10px',
      color: '#000',
    },
  },
  timeContainer: {
    display: 'flex',
    width: '100%',
    height: '175px',
    position: 'relative',
  },
  dateContainer: (props) => ({
    position: 'absolute',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    animationName: props.dateInputs.dateContainer.animation,
    animationDuration: '.5s',
    opacity: props.dateInputs.dateContainer.opacity,
    width: props.dateInputs.dateContainer.width,
  }),
  dateTimeContainer: (props) => ({
    position: 'absolute',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    animationName: props.dateInputs.dateTimeContainer.animation,
    animationDuration: '.5s',
    opacity: props.dateInputs.dateTimeContainer.opacity,
    width: props.dateInputs.dateTimeContainer.width,
  }),
  dateInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    '& p': {
      color: 'rgb(7,82,18)',
    },
  },
  dateInput: {
    margin: '10px 0',
    padding: '5px',
    border: '1px solid rgb(7,82,18)',
    borderRadius: '10px',
    width: '60%',
    height: '35px',
    fontSize: '1.25rem',
    '&::-webkit-calendar-picker-indicator': {
      // filter: 'invert(1)',
      cursor: 'pointer',
    },
    '&:active, &:focus': {
      outline: 'none',
    },
  },
});
