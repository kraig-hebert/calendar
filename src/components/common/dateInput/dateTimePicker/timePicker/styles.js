import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  timePicker: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '35px',
    backgroundColor: theme.light.main,
    borderTop: `1px solid ${theme.primary.main}`,
    '&  div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '25px',
      height: '25px',
      margin: '0 1px',
      '&:nth-of-type(2)': {
        width: '10px',
      },
      '&:nth-of-type(3)': {
        width: '20px',
      },
    },
  },
  selectable: {
    backgroundColor: theme.primary.main,
    color: theme.light.main,
    borderRadius: '5px',
    padding: '0 3px',
    '&:hover': {
      backgroundColor: theme.primary.halfAlpha,
      color: theme.dark.main,
      cursor: 'pointer',
    },
  },
}));
