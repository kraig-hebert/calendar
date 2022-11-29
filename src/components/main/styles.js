import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  main: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '7% auto',
    overflow: 'scroll',
    marginTop: '5px',
  },
  mainHeader: {
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '2rem',
    width: '90%',
  },
  headerIconButton: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    borderRadius: '10px',
    backgroundColor: theme.secondary.main,
    '&:hover': {
      backgroundColor: theme.secondary.halfAlpha,
    },
  },
  headerDate: {
    marginLeft: '15px',
    fontWeight: '500',
  },
  hamburger: {
    fontSize: '2rem',
    color: theme.primary.main,
    cursor: 'pointer',
    position: 'absolute',
    left: '10px',
    top: '10px',
  },
  calendarContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));
