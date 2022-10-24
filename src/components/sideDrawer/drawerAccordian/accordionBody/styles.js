import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  body: {
    height: (props) => props.height,
    overflow: 'hidden',
    transition: 'height .5s',
    width: '80%',
  },
});
