import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  calendar: (props) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: `repeat(${props.rowTotal}, 30px)`,
    width: '100%',
    backgroundColor: theme.light.main,
    zIndex: '4',
  }),
  baseDay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1px',
    width: '25px',
    height: '25px',
  },
  headerDay: {
    extend: 'baseDay',
    cursor: 'default',
  },
  day: {
    extend: 'baseDay',
    borderRadius: '50%',
    cursor: 'pointer !important',
    '&:hover': {
      backgroundColor: theme.secondary.main,
    },
  },
  currentDay: {
    extend: 'baseDay',
    borderRadius: '50%',
    cursor: 'pointer !important',
    backgroundColor: theme.primary.main,
    color: theme.light.main,
  },
}));
