import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@keyframes fadeIn': {
    from: { backgroundColor: '#fff' },
    to: { backgroundColor: 'rgb(120,255,140)' },
  },
  '@keyframes fadeOut': {
    from: { backgroundColor: 'rgb(120,255,140)' },
    to: { backgroundColor: '#fff' },
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
    backgroundColor: 'rgb(120,255,140)',
    animation: '$fadeIn',
    animationDuration: '.75s',
  },
  inActiveEventType: {
    backgroundColor: '#fff',
    animation: '$fadeOut',
    animationDuration: '.75s',
  },
  slider: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(7,82,18,.5)',
    borderRadius: '34px',
    transition: '.5s',
    '&:before': {
      position: 'absolute',
      content: '""',
      height: '20px',
      width: '20px',
      left: '-5px',
      bottom: '-15%',
      backgroundColor: 'rgb(7,82,18)',
      borderRadius: '50%',
      transition: '.75s',
    },
  },
});
