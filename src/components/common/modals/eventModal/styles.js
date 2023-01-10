import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    margin: 'auto',
    zIndex: props.modal.zIndex,
    backgroundColor: theme.light.main,
    border: '1px solid ' + theme.primary.main,
    borderRadius: '20px',
    opacity: props.modal.opacity,
    animationName: props.modal.animation,
    animationDuration: '.55s',
  }),
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    padding: '10px 0',
    backgroundColor: theme.primary.main,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottom: '1px solid ' + theme.primary.main,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: theme.primary.main,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottom: '1px solid ' + theme.primary.main,
    '&:first-of-type': {
      width: '125px',
    },
    '&:last-of-type': {
      width: '75px',
    },
  },
  iconBase: {
    margin: '10px 10px',
    cursor: 'pointer',
    fontSize: '30px',
  },
  iconActive: {
    extend: 'iconBase',
    color: theme.secondary.main,
  },
  iconDisabled: {
    extend: 'iconBase',
    color: theme.secondary.halfAlpha,
    cursor: 'default',
  },
  titleInputContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  titleInput: {
    height: '35px',
    padding: '5px 15px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.75rem',
    '&:active, &:focus': {
      outline: '2px solid ' + theme.secondary.main,
      '& + span': {
        left: '100px',
        color: theme.light.transparant,
      },
    },
  },
  placeholder: {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.dark.halfAlpha,
    backgroundColor: 'theme.light.main',
    padding: '0 20px',
    pointerEvents: 'none',
    transition: '.35s',
  },
  modelBody: (props) => ({
    display: 'flex',
    width: '100%',
    height: props.modalHeight,
  }),
  dateContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    animationName: props.dateInputs.dateContainer.animation,
    opacity: props.dateInputs.dateContainer.opacity,
    width: props.dateInputs.dateContainer.width,
  }),
  dateTimeContainer: (props) => ({
    extend: 'dateOrTimeContainer',
    left: '0',
    animationName: props.dateInputs.dateTimeContainer.animation,
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
      color: theme.primary.main,
    },
  },
  dateInput: {
    width: '60%',
    height: '35px',
    margin: '10px 0',
    padding: '5px',
    border: '1px solid ' + theme.primary.main,
    borderRadius: '10px',
    fontSize: '1.25rem',
    '&::-webkit-calendar-picker-indicator': {
      // filter: 'invert(1)',
      cursor: 'pointer',
    },
    '&:active, &:focus': {
      outline: 'none',
    },
  },
}));
