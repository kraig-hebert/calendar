import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@keyframes unroll': (props) => ({
    from: { height: '0px', display: 'none' },
    to: { height: props.height, display: props.display },
  }),
  eventListPopUp: (props) => ({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: props.width,
    height: props.height,
    top: `-${props.top}px`,
    left: '50%',
    transform: 'translate(-50%)',
    backgroundColor: theme.light.main,
    filter: 'drop-shadow(0px 0px 1px #000)',
    borderRadius: '5px',
    overflow: 'hidden',
    transition: 'height .5s, top .5s',
    zIndex: '2',
  }),
  eventsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '5px 0px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '80%',
    height: '25px',
    color: theme.primary.main,
    fontSize: '1.25rem',
    '& svg': {
      cursor: 'pointer',
    },
  },
}));
