import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  pickerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.primary.main,
    padding: '5px 0',
    fontSize: '1.15rem',
    color: theme.light.main,
    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    '& div:first-of-type': {
      marginLeft: '15px',
    },
    '& div:last-of-type': {
      marginRight: '15px',
    },
  },
}));
