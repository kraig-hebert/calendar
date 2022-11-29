import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: '1rem',
    padding: '5px',
  },
  label: {
    marginLeft: '10px',
  },
  checkBox: {
    width: '15px',
    height: '15px',
  },
});
