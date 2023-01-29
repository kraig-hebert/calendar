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
  },
  divDefault: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
    borderRadius: '5px',
  },
  selectorContainer: {
    overflow: 'hidden',
    extend: 'divDefault',
    width: '25px',
    margin: '0 1px',
    backgroundColor: theme.primary.main,
    '&:hover': {
      backgroundColor: theme.primary.halfAlpha,
      color: theme.dark.main,
      cursor: 'pointer',
    },
  },
  selector: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: theme.light.main,
    zIndex: '6',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  }),
  selectorOption: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
  },
  separator: {
    extend: 'divDefault',
    width: '10px',
  },
  staticDigits: {
    extend: 'divDefault',
    width: '20px',
  },
}));
