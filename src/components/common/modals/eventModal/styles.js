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
  modelBody: (props) => ({
    display: 'flex',
    width: '100%',
    minHeight: '200px',
    height: props.modalHeight,
  }),
  dateContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
}));
