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
    width: '80%',
    height: props.height,
    transition: '.25s',
    borderTop: '1px solid ' + theme.light.main,
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    overflow: 'hidden',
    backgroundColor: theme.secondary.main,
    '& h2': {
      paddingTop: '10px',
      color: theme.light.main,
      backgroundColor: theme.primary.main,
      textAlign: 'center',
      height: '20px',
      width: '100%',
    },
    '& input': {
      padding: '5px',
      border: '1px solid ' + theme.primary.main,
      borderRadius: '2px',
      width: '175px',
      height: '20px',
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
    backgroundColor: theme.primary.main,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
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
