import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  switchSelectorsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  switchContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    '& p': {
      fontSize: '1.25rem',
      marginRight: '10px',
    },
    '& label': {
      position: 'relative',
      width: '50px',
      height: '25px',
    },
    '& input': {
      opacity: '0',
      width: '0',
      height: '0',
      '&:checked + span': { backgroundColor: 'rgb(120,255,140)' },
      '&:checked + span:before': {
        transform: 'translateX(20px)',
      },
    },
  },
  slider: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.1)',
    border: '1px solid #000',
    borderRadius: '34px',
    transition: '.4s',
    '&:before': {
      position: 'absolute',
      content: '""',
      height: '20px',
      width: '20px',
      left: '4px',
      bottom: '1px',
      backgroundColor: 'rgb(7,82,18)',
      borderRadius: '50%',
      transition: '.4s',
    },
  },
});
