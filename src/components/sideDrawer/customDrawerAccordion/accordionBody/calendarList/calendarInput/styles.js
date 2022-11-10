import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1rem',
    padding: '5px',
    backgroundColor: 'rgb(120,255,140)',
    '&:hover': {
      backgroundColor: 'rgb(120,255,100)',
    },
  },
  label: {
    marginLeft: '10px',
  },
});
