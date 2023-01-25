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
}));
