import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  body: {
    height: (props) => props.height,
    width: '85%',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderTop: '1px solid ' + theme.light.main,
    overflow: 'hidden',
    transition: 'height .25s',
  },
}));
