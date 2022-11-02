import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  dayCalendar: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10px',
    width: props.calendarWidth,
  }),
  timeBlock: (props) => ({
    display: 'block',
    position: 'relative',
    width: props.blockWidth,
    height: '33px',
    border: '1px solid #000',
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
