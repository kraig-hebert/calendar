import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  dayCalendar: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10px',
    width: props.calendarWidth,
  }),
  allDayEvents: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: props.width,
    height: props.height,
  }),
  eventBorder: {
    height: '1px',
    width: '100%',
    backgroundColor: theme.light.main,
  },
  timeBlocks: { width: '100%' },
  timeBlock: (props) => ({
    display: 'block',
    position: 'relative',
    width: props.blockWidth,
    height: '30px',
    border: '1px solid ' + theme.dark.halfAlpha,
    borderRight: props.borderRight,
    '&:not(:last-of-type)': {
      borderBottom: '0',
    },
  }),
  time: (props) => ({
    display: props.displayTime ? 'block' : 'none',
    position: 'absolute',
    right: '101%',
    top: '-5px',
  }),
}));
