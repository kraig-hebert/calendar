import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  '@keyframes revealDrawer': {
    '0%': { width: '0' },
    '100%': { width: '200px' },
  },
  '@keyframes hideDrawer': {
    '0%': { width: '200px' },
    '100%': { width: '0' },
  },
  drawerContainer: (props) => ({
    position: 'absolute',
    width: props.width,
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
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
    backgroundColor: theme.secondary.main,
    borderLeft: `1px solid ${theme.primary.main}`,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
  }),
  icon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: theme.primary.main,
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
  alert: {
    fontSize: '.75rem',
    margin: '10px 10px',
  },
}));
