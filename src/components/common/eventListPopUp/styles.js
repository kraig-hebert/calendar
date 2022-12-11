import { createUseStyles } from 'react-jss';
import EventListPopUp from './EventListPopUp';

export const useStyles = createUseStyles((theme) => ({
  eventListPopUp: {
    position: 'absolute',
    width: '100px',
    height: '20px',
    bottom: '0',
    left: '0',
    backgroundColor: 'yellow',
  },
}));
