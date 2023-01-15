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
    top: '55%',
    transform: 'translateY(-50%)',
    animationName: props.animationName,
    animationDuration: '.1s',
    overflow: 'hidden',
  }),
  drawerContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '250px',
    width: '200px',
    backgroundColor: theme.light.main,
    borderLeft: `1px solid ${theme.primary.main}`,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  icon: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: theme.light.main,
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
}));
