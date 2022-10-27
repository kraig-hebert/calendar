import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  mainHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    height: '7%',
  },
  headerButton: {
    width: '40px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(7,82,18)',
    border: 'none',
    borderRadius: '5px',
    margin: '5px',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    '&:active': {
      backgroundColor: 'rgb(7,40,18)',
    },
  },
  headerDate: {
    marginLeft: '15px',
    fontWeight: '500',
  },
  hamburger: {
    fontSize: '2rem',
    color: 'rgb(7,82,18)',
    cursor: 'pointer',
    position: 'absolute',
    left: '10px',
    top: '10px',
  },
});
