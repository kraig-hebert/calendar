import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@keyframes revealDrawer': {
    '0%': { height: '0' },
    '100%': { height: '125px' },
  },
  '@keyframes hideDrawer': {
    '0%': { height: '125px' },
    '100%': { height: '0' },
  },
  drawerContainer: (props) => ({
    position: 'absolute',
    height: props.height,
    left: '50%',
    bottom: '100%',
    transform: 'translateX(-50%)',
    animationName: props.animationName,
    animationDuration: '.25s',
    overflow: 'hidden',
  }),
  drawerContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '125px',
    width: '200px',
    backgroundColor: theme.success.main,
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
  },
  icon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: theme.primary.main,
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
}));
