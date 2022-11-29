import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  drawerContainer: {
    width: '300px',
    borderRight: '1px solid ' + theme.primary.main,
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    transition: '1.15s',
    width: '100%',
  },
  closeIcon: {
    cursor: 'pointer',
    left: '225px',
    paddingRight: '10px',
    fontSize: '2rem',
    color: theme.primary.main,
  },
  monthName: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '1.5rem',
  },
}));
