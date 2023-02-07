import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  newCalendarForm: (props) => ({
    position: 'absolute',
    top: '100%',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '75%',
    height: props.height,
    backgroundColor: theme.secondary.main,
    borderTop: '1px solid ' + theme.light.main,
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    overflow: 'hidden',
    transition: '.25s',
    '& h2': {
      width: '100%',
      padding: '5px 0px',
      backgroundColor: theme.primary.main,
      color: theme.light.main,
      textAlign: 'center',
      fontSize: '1rem',
    },
    '& input': {
      width: '155px',
      height: '20px',
      padding: '5px',
      border: '1px solid ' + theme.primary.main,
      borderRadius: '2px',
      '&:active, &:focus': {
        outline: 'none',
      },
      '&::placeholder': {
        color: theme.primary.main,
      },
    },
    '& p': {
      width: '185px',
      marginTop: '10px',
    },
  }),
  filtersContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '180px',
    height: '40px',
  },
  saveButton: {
    width: '100px',
    height: '30px',
    marginBottom: '10px',
    backgroundColor: theme.primary.main,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      opacity: '.80',
    },
    '&:disabled': {
      cursor: 'default',
      opacity: '0.5',
    },
    '& h3': {
      color: theme.light.main,
    },
  },
}));
