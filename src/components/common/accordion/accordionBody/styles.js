import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: (props) => props.height,
    overflow: 'hidden',
    transition: 'height .25s',
  },
});
