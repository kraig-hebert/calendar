import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  yearCalendar: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
  },
  miniCalendar: {
    alignSelf: 'center',
    justifySelf: 'center',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthName: {
    backgroundColor: 'rgb(120,255,140)',
    display: 'block',
    height: '100%',
    width: '50%',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#000',
    '&:hover': {
      backgroundColor: 'rgb(7,82,18)',
      color: '#fff',
      cursor: 'pointer',
    },
  },

  bottomBorder: {
    display: 'block',
    height: '1px',
    backgroundColor: 'black',
    width: '50%',
  },
});
