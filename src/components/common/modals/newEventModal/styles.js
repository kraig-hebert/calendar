import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  modal: (props) => ({
    display: props.display,
    position: 'absolute',
    zIndex: '5',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  }),
  modalContent: {
    backgroundColor: 'yellow',
    margin: 'auto',
    padding: '20px',
    width: '50%',
  },
});
