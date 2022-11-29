import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
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
      border: '1px solid ' + theme.dark.main,
      backgroundColor: theme.primary.main,
      color: theme.light.main,
      borderRight: '0',
      '&:last-of-type': {
        borderRight: '1px solid ' + theme.light.main,
      },
    },
  },
  calendarBody: (props) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: `repeat(${props.rows}, 1fr)`,
    height: 'inherit',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      borderBottom: '1px solid ' + theme.dark.halfAlpha,
      borderLeft: '1px solid ' + theme.dark.halfAlpha,
      '&:nth-of-type(7n), &:last-of-type': {
        borderRight: '1px solid ' + theme.dark.halfAlpha,
      },
      '& span': {
        display: 'grid',
        width: '30px',
        height: '40px',
        marginTop: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
        '&:hover': {
          borderRadius: '50%',
          backgroundColor: theme.secondary.main,
          cursor: 'pointer',
        },
      },
    },
  }),
  eventsContainer: {
    width: '95%',
    height: '100%',
    '& > div': {
      margin: '1px 1px',
    },
  },
  currentDay: {
    backgroundColor: theme.primary.main,
    color: theme.light.main,
    borderRadius: '50%',
  },
  eventInfo: {
    margin: '0 3px',
  },
}));
