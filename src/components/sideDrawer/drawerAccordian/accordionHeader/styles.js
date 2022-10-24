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
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(7,82,18,.80)',
    },
  },
  icon: {
    fontSize: '1.5rem',
    fontWeight: '800',
  },
});
