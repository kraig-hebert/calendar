import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  monthCalendar: {
    marginTop: '10px',
    width: '80%',
    height: '98%',
    display: 'grid',
    gridTemplateRows: '75px auto',
    marginBottom: '20px',
  },
  calendarHeader: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    '& div': {
      display: 'flex',
      alignSelf: 'center',
      justifySelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #000',
      width: '30px',
      height: '30px',
    },
  },
  calendarBody: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    '& div': {
      display: 'flex',
      alignSelf: 'center',
      justifySelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '30px',
      '&:hover': {
        borderRadius: '50%',
        backgroundColor: 'rgb(120,255,140)',
        cursor: 'pointer',
      },
    },
  },
  currentDay: {
    backgroundColor: 'rgb(7,82,18)',
    color: 'white',
    borderRadius: '50%',
  },
});
