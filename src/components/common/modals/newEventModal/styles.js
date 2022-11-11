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
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: props.zIndex,
    opacity: props.opacity,
    animationName: props.animation,
    animationDuration: '.5s',
  }),
  modalContent: (props) => ({
    position: 'relative',
    backgroundColor: 'yellow',
    margin: 'auto',
    padding: '20px',
    width: '30%',
    height: '50%',
    borderRadius: '20px',
    opacity: props.opacity,
    animationName: props.animation,
    animationDuration: '.5s',
  }),
  iconContainer: {
    position: 'absolute',
    right: '30px',
  },
  closeIcon: {
    cursor: 'pointer',
    fontSize: '2rem',
    color: 'rgb(7,82,18)',
  },
});
