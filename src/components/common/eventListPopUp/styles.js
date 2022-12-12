import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  eventListPopUp: (props) => ({
    position: 'absolute',
    display: props.display ? 'block' : 'none',
    width: props.width,
    height: props.height,
    bottom: '0px',
    right: '0',
    backgroundColor: 'yellow',
  }),
  eventInfo: {
    margin: '0 3px',
  },
}));
