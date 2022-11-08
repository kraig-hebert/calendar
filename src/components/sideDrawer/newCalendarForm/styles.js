import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  newCalendarForm: (props) => ({
    position: 'absolute',
    top: '100%',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    height: props.height,
    transition: '.25s',
    borderTop: '1px solid #fff',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    overflow: 'hidden',
    backgroundColor: 'rgb(120,255,140)',
    '& p': {
      paddingTop: '10px',
      color: '#fff',
      backgroundColor: 'rgb(7,82,18)',
      display: 'flex',
      justifyContent: 'center',
      height: '20px',
      width: '100%',
    },
  }),
});
