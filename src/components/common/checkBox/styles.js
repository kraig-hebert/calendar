import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  checkBox: (props) => ({
    height: '16px',
    width: '16px',
    backgroundColor: props.checkBoxBackgroundColor,
    position: 'relative',
    borderRadius: '3px',
    transition: '.3s',
    border: '1px solid #000',
    '&:after': {
      position: 'absolute',
      content: '""',
      display: 'block',
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
});
