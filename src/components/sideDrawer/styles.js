import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  drawerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    paddingTop: '10px',
    borderRight: `1px solid ${theme.dark.quarterAlpha}`,
    overflow: 'hidden',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    transition: '1.15s',
    width: '100%',
  },
  closeIcon: {
    left: '225px',
    paddingRight: '10px',
    color: theme.primary.main,
    fontSize: '2rem',
    cursor: 'pointer',
  },
  monthName: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
}));
