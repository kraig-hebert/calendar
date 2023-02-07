import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  eventContainer: (props) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: props.width,
    height: '20px',
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: '5px',
    cursor: props.cursor,
    margin: '1px 0px',
    fontSize: '.9rem',
  }),
  eventInfo: {
    margin: '0 3px',
  },
});
