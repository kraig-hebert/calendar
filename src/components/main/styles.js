import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '7% 93%',
  },
  mainHeader: {
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    width: '100%',
  },
  headerIconButton: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'rgb(120,255,140)',
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
