import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@keyframes fadeIn': {
    from: { backgroundColor: theme.light.main },
    to: { backgroundColor: theme.secondary.main },
  },
  '@keyframes fadeOut': {
    from: { backgroundColor: theme.secondary.main },
    to: { backgroundColor: theme.light.main },
  },
  switchContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginTop: '10px',
    '& p': {
      fontSize: '1.25rem',
      marginRight: '10px',
    },
    '& label': {
      position: 'relative',
      width: '40px',
      height: '15px',
    },
    '& input': {
      opacity: '0',
      width: '0',
      height: '0',
      '&:checked + span:before': {
        transform: 'translateX(30px)',
      },
    },
  },
  activeEventType: {
    backgroundColor: theme.secondary.main,
    animation: '$fadeIn',
    animationDuration: '.75s',
  },
  inActiveEventType: {
    backgroundColor: theme.light.main,
    animation: '$fadeOut',
    animationDuration: '.75s',
  },
  activeSlider: (props) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: theme.primary.halfAlpha,
    borderRadius: '34px',
    transition: '.5s',
    cursor: 'pointer',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '-5px',
      bottom: '-15%',
      height: '20px',
      width: '20px',
      backgroundColor: props.backgroundColor,
      borderRadius: '50%',
      transition: '.75s',
      cursor: 'pointer',
    },
  }),
}));
