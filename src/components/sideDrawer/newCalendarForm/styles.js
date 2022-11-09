import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
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
    borderTop: '1px solid #fff',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    overflow: 'hidden',
    backgroundColor: 'rgb(120,255,140)',
    '& h2': {
      paddingTop: '10px',
      color: '#fff',
      backgroundColor: 'rgb(7,82,18)',
      textAlign: 'center',
      height: '20px',
      width: '100%',
    },
    '& input': {
      padding: '5px',
      border: '1px solid rgb(7,82,18)',
      borderRadius: '2px',
      width: '175px',
      height: '20px',
      '&:active, &:focus': {
        outline: 'none',
      },
      '&::placeholder': {
        color: 'rgb(7,82,18)',
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
    height: '100px',
  },
  saveButton: {
    width: '100px',
    height: '30px',
    backgroundColor: 'rgb(7,82,18)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    '&:hover': {
      opacity: '.80',
    },
    '& h3': {
      color: '#fff',
    },
  },
});
