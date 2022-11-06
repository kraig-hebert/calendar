import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    width: '100%',
    height: '50px',
    backgroundColor: 'rgb(7,82,18)',
    boxShadow: '2px 0px 5px 2px #000000',
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
      color: '#fff',
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
});
