import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
  },
  bottomContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
});
