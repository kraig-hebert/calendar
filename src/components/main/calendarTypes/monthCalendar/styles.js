import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  monthCalendar: {
    display: 'grid',
    gridTemplateRows: '20px auto',
    width: '99%',
    height: '97%',
    marginTop: '10px',
    marginBottom: '20px',
  },
  calendarHeader: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    width: '100%',
    marginLeft: '1px',
    '& div': {
      display: 'flex',
      alignSelf: 'center',
      justifySelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: theme.primary.main,
      color: theme.light.main,
      border: '1px solid ' + theme.dark.main,
      '&:first-of-type': {
        borderTopLeftRadius: '5px',
      },
      '&:last-of-type': {
        borderRight: '1px solid ' + theme.dark.main,
        borderTopRightRadius: '5px',
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '35px',
        marginTop: '10px',
        '&:hover': {
          borderRadius: '50%',
          backgroundColor: theme.secondary.main,
          cursor: 'pointer',
        },
      },
    },
  }),
  eventsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginBottom: '5px',
    '& > div': {
      margin: '1px 1px',
    },
  },
  currentDay: {
    backgroundColor: theme.primary.main,
    color: theme.light.main,
    borderRadius: '50%',
  },
}));
