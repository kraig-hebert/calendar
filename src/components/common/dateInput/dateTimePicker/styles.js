import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  picker: (props) => ({
    position: 'absolute',
    top: '100%',
    left: '0',
    display: props.display ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    boxShadow: `0px 0px 3px ${theme.dark.main}`,
    zIndex: '3',
  }),
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30px',
    borderTop: `1px solid ${theme.primary.main}`,
    backgroundColor: theme.secondary.main,
  },
  button: {
    width: '100px',
    height: '20px',
    textAlign: 'center',
    borderRadius: '5px',
    border: 'none',
    color: theme.light.main,
    backgroundColor: theme.primary.main,
    cursor: 'pointer',
  },
}));
