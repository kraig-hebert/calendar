import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  linkList: {
    '& li': {
      display: 'inline',
      padding: '10px',
      cursor: 'pointer',
      '&:hover': {
        borderBottom: '2px dashed ' + theme.light.main,
      },
    },
  },
  selectedLink: {
    color: theme.secondary.main,
  },
}));
