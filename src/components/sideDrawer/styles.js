import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  drawerContainer: {
    width: '300px',
    position: 'relative',
    padding: {
      top: '10px',
    },
    display: (props) => props.display,
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    left: '225px',
    fontSize: '1.5rem',
    color: '#000',
  },
});
