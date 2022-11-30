import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  checkBox: (props) => ({
    position: 'relative',
    height: '16px',
    width: '16px',
    backgroundColor: props.checkBoxBackgroundColor,
    borderRadius: '3px',
    border: '1px solid ' + theme.dark.main,
    transition: '.3s',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '4px',
      width: '5px',
      height: '10px',
      border: 'solid ' + props.checkColor,
      borderWidth: '0 3px 3px 0',
      transform: 'rotate(45deg)',
      transition: '.3s',
    },
    /*     '&:hover:after': {
          position: 'absolute',
          content: '""',
          display: 'block',
          left: '4px',
          width: '5px',
          height: '10px',
          borderWidth: '0 3px 3px 0',
          transform: 'rotate(45deg)',
          border: 'solid green',
        },
     */
  }),
}));
