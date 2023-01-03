import Header from './components/header/Header';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Main from './components/main/Main';
import { useStyles } from './styles';
import NewEventModal from './components/common/modals/newEventModal/NewEventModal';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <Header />
      <div className={classes.bottomContainer}>
        <SideDrawer />
        <Main />
      </div>
      <NewEventModal />
    </div>
  );
}

export default App;
