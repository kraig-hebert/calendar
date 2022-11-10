import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    position: 'relative',
  },
  bottomContainer: {
    display: 'flex',
    height: '100%',
    marginTop: '50px',
  },
});
