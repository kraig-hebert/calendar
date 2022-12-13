import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  overflowEvents: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    height: '20px',
    backgroundColor: theme.dark.quarterAlpha,
    color: theme.dark.main,
  },
  title: { margin: 'auto', cursor: 'pointer' },
}));
