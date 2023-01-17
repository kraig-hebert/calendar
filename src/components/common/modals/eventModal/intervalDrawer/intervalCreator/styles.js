import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
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
    width: props.width,
    height: '100%',
    animationName: props.animationName,
    animationDuration: '.75s',
    overflow: 'hidden',
    fontSize: '1.25rem',
  }),
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '100%',
  },
  icon: {
    fontSize: '1.25rem',
    color: theme.primary.main,
    marginTop: '10px',
  },
}));
