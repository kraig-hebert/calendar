import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@keyframes revealDrawer': {
    '0%': { height: '0' },
    '100%': { height: '75px' },
  },
  '@keyframes hideDrawer': {
    '0%': { height: '75px' },
    '100%': { height: '0' },
  },
  drawerContainer: (props) => ({
    position: 'absolute',
    width: '200px',
    height: props.height,
    left: '50%',
    top: '100%',
    transform: 'translateX(-50%)',
    animationName: props.animationName,
    animationDuration: '.25s',
    overflow: 'hidden',
  }),
  drawerContent: (props) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75px',
    width: '200px',
    backgroundColor: theme.alert.main,
    borderTop: `1px solid ${theme.primary.main}`,
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
  }),
  icon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: theme.light.main,
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
  alert: {
    fontSize: '.75rem',
    margin: '10px 20px',
    color: theme.light.main,
  },
}));
