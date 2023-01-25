import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  timePicker: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25px',
    backgroundColor: theme.light.main,
    borderTop: `1px solid ${theme.primary.main}`,
  },
}));
