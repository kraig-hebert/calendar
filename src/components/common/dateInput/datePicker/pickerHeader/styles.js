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
  },
  selectorContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:first-of-type': {
      marginLeft: '15px',
    },
    '&:last-of-type': {
      marginRight: '15px',
    },
    '& > p': {
      color: `${theme.light.main} !important`,
    },
  },
  icon: {
    margin: '0 1px',
    cursor: 'pointer',
  },
}));
