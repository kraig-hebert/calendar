import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  monthCalendar: {
    marginTop: '10px',
    width: '95%',
    height: '98%',
    display: 'grid',
    gridTemplateRows: '30px auto',
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
      height: '100%',
      width: '100%',
      border: '1px solid #000',
      backgroundColor: 'rgb(7,82,18)',
      color: '#fff',
      borderRight: '0',
      '&:last-of-type': {
        borderRight: '1px solid #000',
      },
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
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
      borderBottom: '1px solid #000',
      borderLeft: '1px solid #000',
      '&:nth-of-type(7n), &:last-of-type': {
        borderRight: '1px solid #000',
      },
      '& a': {
        textDecoration: 'none',
        color: '#000',
      },
      '& span': {
        display: 'grid',
        width: '40px',
        height: '40px',
        marginTop: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          borderRadius: '50%',
          backgroundColor: 'rgb(120,255,140)',
          cursor: 'pointer',
        },
      },
    },
  },
  currentDay: {
    backgroundColor: 'rgb(7,82,18)',
    color: 'white',
    borderRadius: '50%',
  },
});
