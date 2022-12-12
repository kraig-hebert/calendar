import { createUseStyles } from 'react-jss';
import EventListPopUp from './EventListPopUp';

export const useStyles = createUseStyles((theme) => ({
  eventListPopUp: (props) => ({
    position: 'absolute',
    display: props.display ? 'block' : 'none',
    width: props.width,
    bottom: '0px',
    right: '0',
    backgroundColor: 'yellow',
  }),
}));
