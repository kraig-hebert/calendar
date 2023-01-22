import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  monthSelector: (props) => ({
    position: 'absolute',
    top: '0px',
    display: props.display ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    zIndex: '5',
    color: theme.dark.main,
    boxShadow: `0px 0px 3px ${theme.dark.main}`,
  }),
  monthOption: {
    display: 'flex',
    alignItems: 'center',
    width: '100px',
    height: '20px',
    paddingLeft: '7px',
    backgroundColor: theme.secondary.main,
    borderBottom: `1px solid ${theme.primary.main}`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.primary.main,
      color: theme.light.main,
    },
  },
}));
