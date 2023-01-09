import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  eventContainer: (props) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: props.width ? props.width : '90%',
    height: '20px',
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: '5px',
    cursor: props.cursor,
    margin: '1px 0px',
  }),
  eventInfo: {
    margin: '0 3px',
  },
});
