import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@keyframes revealIntervalCreator': {
    '0%': { width: '0' },
    '50%': { width: '0' },
    '100%': { width: '100%' },
  },
  '@keyframes hideIntervalCreator': {
    '0%': { width: '100%' },
    '50%': { width: '0' },
    '100%': { width: '0' },
  },
  intervalContainer: (props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: props.width,
    height: '100%',
    backgroundColor: 'red',
    animationName: props.animationName,
    animationDuration: '.75s',
    overflow: 'hidden',
  }),
});
