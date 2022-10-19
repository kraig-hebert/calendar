import { createUseStyles } from 'react-jss';

import Header from './components/header/Header';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Main from './components/main/Main';

function App() {
  const useStyles = createUseStyles({
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    mainContainer: {
      display: 'flex',
      height: '100%',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <Header />
      <div className={classes.mainContainer}>
        <SideDrawer />
        <Main />
      </div>
    </div>
  );
}

export default App;
