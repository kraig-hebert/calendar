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
    extend: 'divDefault',
    overflow: 'hidden',
    position: 'relative',
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
    position: 'absolute',
    left: '0',
    top: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: theme.light.main,
    zIndex: '6',
    transition: '.35s',
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
