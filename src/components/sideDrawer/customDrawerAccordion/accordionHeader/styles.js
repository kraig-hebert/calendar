import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: {
      left: '10px',
      right: '10px',
    },
    alignItems: 'center',
    backgroundColor: 'rgb(7,82,18)',
    width: '80%',
    height: '40px',
    color: '#fff',
    fontWeight: '800',
    borderRadius: '5px',
  },
  iconGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'rgb(120,255,100)',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  shrunkIcon: {
    fontSize: '1rem',
    fontWeight: '800',
    color: 'rgb(120,255,100)',
    paddingRight: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
