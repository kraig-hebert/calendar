import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    backgroundColor: 'blue',
    width: '100%',
    padding: {
      top: '10px',
      left: '10px',
    },
  },
  hamburger: {
    fontSize: '1.5rem',
    color: '#fff',
    cursor: 'pointer',
  },
});
