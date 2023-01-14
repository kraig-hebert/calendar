import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    height: '30px',
    backgroundColor: theme.primary.main,
    borderRadius: '5px',
    cursor: 'pointer',
    '& p': {
      color: theme.light.main,
      fontSize: '.75rem',
    },
  },
}));
