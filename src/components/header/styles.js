import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  header: {
    position: 'sticky',
    top: '0',
    width: '100%',
    height: '50px',
    backgroundColor: theme.primary.main,
    boxShadow: '2px 0px 5px 2px ' + theme.dark.main,
    fontSize: '1.5rem',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      width: '100%',
      fontSize: '2rem',
    },
    '& div:nth-of-type(1)': {
      paddingLeft: '20px',
    },
    '& div:nth-of-type(2)': {
      textAlign: 'right',
    },
    '& a': {
      textDecoration: 'none',
      color: theme.light.main,
    },
  },
  nav: {
    width: '100%',
    height: 'inherit',
  },
  plusIcon: {
    padding: {
      right: '20px',
    },
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
      fontSize: '2.5rem',
    },
  },
}));
