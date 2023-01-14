import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@keyframes revealDrawer': {
    '0%': { width: '0', border: `1px solid ${theme.primary.main}` },
    '100%': { width: '200px' },
  },
  '@keyframes hideDrawer': {
    '0%': { width: '200px', border: `1px solid ${theme.primary.main}` },
    '99%': { width: '0', border: `1px solid ${theme.primary.main}` },
    '100%': { border: 'none' },
  },
  drawerContainer: {
    position: 'absolute',
    left: '100%',
    top: '50%',
  },
  drawerContent: (props) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: props.width,
    height: '100px',
    transform: 'translateY(-50%)',
    backgroundColor: theme.light.main,
    border: props.border,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    animationName: props.animationName,
    animationDuration: '1s',
    overflow: 'hidden',
  }),
  icon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: theme.primary.main,
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
}));
