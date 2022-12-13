import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  eventListPopUp: (props) => ({
    position: 'absolute',
    display: props.display ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: props.width,
    height: props.height,
    padding: '0 5px',
    bottom: '0px',
    left: '50%',
    transform: 'translate(-50%)',
    backgroundColor: theme.light.main,
    filter: 'drop-shadow(0px 0px 1px #000)',
    borderRadius: '5px',
  }),
  eventInfo: {
    margin: '0 3px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '80%',
    height: '20px',
    color: theme.primary.main,
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
}));
