import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    padding: '10px 0',
    backgroundColor: theme.primary.main,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottom: '1px solid ' + theme.primary.main,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: theme.primary.main,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottom: '1px solid ' + theme.primary.main,
    '&:first-of-type': {
      width: '125px',
    },
    '&:last-of-type': {
      width: '75px',
    },
  },
  iconBase: {
    margin: '10px 10px',
    cursor: 'pointer',
    fontSize: '30px',
  },
  iconActive: {
    extend: 'iconBase',
    color: theme.secondary.main,
  },
  iconDisabled: {
    extend: 'iconBase',
    color: theme.secondary.halfAlpha,
    pointerEvents: 'none',
    cursor: 'default',
  },
  titleInputContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  titleInput: {
    height: '35px',
    padding: '5px 15px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.75rem',
    '&:active, &:focus': {
      outline: '2px solid ' + theme.secondary.main,
      '& + span': {
        left: '100px',
        color: theme.light.transparant,
      },
    },
  },
  placeholder: {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.dark.halfAlpha,
    backgroundColor: 'theme.light.main',
    padding: '0 20px',
    pointerEvents: 'none',
    transition: '.35s',
  },
}));
