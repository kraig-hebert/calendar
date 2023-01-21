import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  calendar: (props) => ({
    position: 'absolute',
    top: '100%',
    left: '0',
    display: props.display ? 'grid' : 'none',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: `repeat(${props.rowTotal}, 30px)`,
    width: '80%',
    backgroundColor: theme.light.main,
    zIndex: '4',
    '& div': {
      extend: 'day',
      cursor: 'default',
    },
  }),
  day: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer !important',
    '&:hover': {
      backgroundColor: theme.secondary.main,
    },
  },
}));
