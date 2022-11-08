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
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
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
  filter: {
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'flex',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundColor: 'black',
  },
});
