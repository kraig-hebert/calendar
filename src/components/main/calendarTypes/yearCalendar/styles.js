import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  yearCalendar: {
    position: 'relative',
    display: 'grid',
    height: '93%',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    '& div': {
      alignSelf: 'center',
      justifySelf: 'center',
      width: '80%',
    },
    '& p': {
      textAlign: 'center',
      width: '80%',
    },
  },
});
