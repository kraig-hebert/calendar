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
  },
  eventsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '92%',
  },
  event: {
    display: 'grid',
    gridTemplateColumns: '15% auto',
    height: '40px',
  },
  eventTime: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
  },
  eventDot: {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    backgroundColor: 'red',
  },
  eventTitle: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  },
}));
