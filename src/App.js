import Header from './components/header/Header';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Main from './components/main/Main';
import { useStyles } from './styles';
import NewEventModal from './components/common/modals/newEventModal/NewEventModal';
import { selectEvents } from './reducers/eventsSlice';
import { useSelector } from 'react-redux';

function App() {
  const classes = useStyles();
  const events = useSelector(selectEvents);
  console.log(events);

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
