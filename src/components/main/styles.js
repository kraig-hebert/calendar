import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  main: {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '5% 95%',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  mainHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifySelf: 'center',
    width: '90%',
    paddingTop: '5px',
    fontSize: '1.75rem',
    overflow: 'hidden',
  },
  headerIconButton: {
    width: '25px',
    height: '25px',
    backgroundColor: theme.secondary.main,
    borderRadius: '10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.secondary.halfAlpha,
    },
  },
  headerDate: {
    marginLeft: '15px',
    fontWeight: '500',
  },
  hamburger: {
    position: 'absolute',
    left: '10px',
    top: '10px',
    color: theme.primary.main,
    fontSize: '2rem',
    cursor: 'pointer',
  },
  calendarContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
}));
