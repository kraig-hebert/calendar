import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  body: {
    height: (props) => props.height,
    overflow: 'hidden',
    transition: 'height .25s',
    width: '85%',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderTop: '1px solid #fff',
  },
});
