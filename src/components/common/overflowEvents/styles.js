import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  overflowEvents: (props) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: props.width,
    height: '20px',
    backgroundColor: theme.dark.quarterAlpha,
    margin: '1px 0px',
    color: theme.dark.main,
  }),
  title: { margin: 'auto', cursor: 'pointer' },
}));
