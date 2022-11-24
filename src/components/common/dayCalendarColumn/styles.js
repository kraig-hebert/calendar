import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
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
    height: props.height,
    marginBottom: '5px',
    '& div:first-of-type': {
      borderTopRightRadius: '5px',
      borderTopLeftRadius: '5px',
    },
    '& div:last-of-type': {
      borderBottomRightRadius: '5px',
      borderBottomLeftRadius: '5px',
    },
  }),
  timeBlocks: { width: '100%' },
  timeBlock: (props) => ({
    display: 'block',
    position: 'relative',
    width: props.blockWidth,
    height: '30px',
    border: '1px solid rgba(0,0,0,0.5)',
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
});
