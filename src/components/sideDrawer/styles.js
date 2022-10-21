import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  drawerContainer: {
    width: '300px',
    borderRight: '1px solid rgb(7,82,18)',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    color: 'rgb(7,82,18)',
  },
  monthName: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '1.5rem',
  },
});
