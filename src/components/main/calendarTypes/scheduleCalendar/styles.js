import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  scheduleCalendar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  dayContainer: {
    display: 'flex',
    width: '100%',
    borderBottom: `1px solid ${theme.dark.quarterAlpha}`,
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '8%',
    height: '40px',
    marginLeft: '15px',
    cursor: 'default',
  },
  eventsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '92%',
  },
  eventContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
  },
  event: {
    display: 'grid',
    height: '60%',
    width: '99%',
    gridTemplateColumns: '15% auto',
    borderRadius: '10px',
    cursor: 'default',
  },
  selectableEvent: {
    extend: 'event',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.dark.eighthAlpha,
    },
  },
  eventTime: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '30px',
  },
  eventTitle: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  },
}));
