import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  linkList: {
    '& li': {
      display: 'inline',
      padding: '10px',
      cursor: 'pointer',
      '&:hover': {
        borderBottom: '2px dashed #fff',
      },
    },
  },
  selectedLink: {
    color: 'rgb(120,255,140)',
  },
});
