import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  calendar: {
    marginTop: '10px',
    width: '90%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(7, 30px)',
    marginBottom: '20px',
    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      cursor: 'default',
    },
  },
  currentDay: {
    backgroundColor: 'rgb(7,82,18)',
    color: 'white',
    borderRadius: '50%',
  },
});
