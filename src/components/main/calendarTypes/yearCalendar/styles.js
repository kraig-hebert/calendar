import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  yearCalendar: {
    position: 'relative',
    display: 'grid',
    height: '93%',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    '& p': {
      backgroundColor: 'rgb(120,255,140)',
      display: 'block',
      height: '100%',
      width: '50%',
      textAlign: 'center',
    },
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
  bottomBorder: {
    display: 'block',
    height: '1px',
    backgroundColor: 'black',
    width: '50%',
  },
});
