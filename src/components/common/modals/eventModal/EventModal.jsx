import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectEventModalOpen,
  eventModalClosed,
  selectEventForEditID,
  selectDefaultCalendars,
  selectDefaultCalendarTitles,
  selectAllCalendars,
} from '../../../../reducers/appSettings';
import {
  saveNewEvent,
  editEvent,
  selectEvents,
  deleteEvent,
} from '../../../../reducers/eventsSlice';
import { format, isAfter, addHours } from 'date-fns';
import { useStyles } from './styles';
import ModalHeader from './modalHeader/ModalHeader';
import SwitchSelectors from './switchSelectors/SwitchSelectors';
import EventCalendars from './eventCalendars/EventCalendars';
import TimeContainer from './timeContainer/TimeContainer';
import UserAlertDrawer from './userAlertDrawer/UserAlertDrawer';
import { useTheme } from 'react-jss';

const EventModal = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const titleRef = useRef();
  const eventModalOpen = useSelector(selectEventModalOpen);
  const eventForEditID = useSelector(selectEventForEditID);
  const allCalendars = useSelector(selectAllCalendars);
  const events = useSelector(selectEvents);
  const eventForEdit = events.filter((event) => event.id === eventForEditID)[0];
  const defaultCalendarTitles = useSelector(selectDefaultCalendarTitles);
  const defaultCalendars = useSelector(selectDefaultCalendars);

  const [inputValue, setInputValue] = useState('');
  const validateInputValue = () => {
    if (inputValue && inputValue.trim().length > 0) return true;
    else return false;
  };
  const [selectedSwitch, setSelectedSwitch] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState(
    defaultCalendars[0].title
  );
  const [userAlertOpen, setUserAlertOpen] = useState(false);
  const [alertList, setAlertList] = useState([]);

  const cleanUpTime = (date) => {
    const newDate = date;
    newDate.setHours(date.getHours(), 0, 0);
    return newDate;
  };

  const setDateInputFormat = (date) => format(date, 'yyyy-MM-dd');
  const setDateTimeInputFormat = (date) => {
    const newDate = format(date, 'yyyy-MM-ddHH:mm:ss');
    return newDate.slice(0, 10) + 'T' + newDate.slice(10);
  };

  const [singleDate, setSingleDate] = useState(setDateInputFormat(new Date()));
  const [startTime, setStartTime] = useState(
    setDateTimeInputFormat(cleanUpTime(new Date()))
  );
  const [endTime, setEndTime] = useState(
    setDateTimeInputFormat(cleanUpTime(addHours(new Date(), 1)))
  );
  const validateDateTimeValues = () => {
    if (isAfter(new Date(endTime), new Date(startTime))) return true;
    else return false;
  };

  const [savingAllowed, setSavingAllowed] = useState(false);

  // close and clear all values in modal inputs
  const clearModal = () => {
    dispatch(eventModalClosed());
    // set delay to match $fadeOut time so reset isn't visible
    setTimeout(() => {
      setInputValue('');
      setSelectedSwitch(false);
      setSelectedCalendar(defaultCalendars[0].title);
      setSingleDate(setDateInputFormat(new Date()));
      setStartTime(setDateTimeInputFormat(cleanUpTime(new Date())));
      setEndTime(setDateTimeInputFormat(addHours(cleanUpTime(new Date()), 1)));
      setSavingAllowed(false);
      setUserAlertOpen(false);
    }, 500);
  };
  // returns dateObject created from the dateInput value
  const setDate = () => {
    const datePartsList = singleDate.split('-');
    return new Date(
      datePartsList[0],
      datePartsList[1] - 1,
      datePartsList[2]
    ).toJSON();
  };
  // sets checkmark color to black or white if calendar is default/custom
  const setColor = () => {
    if (defaultCalendarTitles.includes(selectedCalendar))
      return theme.dark.main;
    else return theme.light.main;
  };

  const handleUserAlert = (display) => {
    const newAlertList = [];
    if (!validateInputValue()) newAlertList.push('A title is required');
    if (!validateDateTimeValues())
      newAlertList.push('The end date you entered is before the start date. ');
    setAlertList(newAlertList);
    if (display) setUserAlertOpen(true);
  };

  const handleSave = () => {
    if (!savingAllowed) {
      handleUserAlert(true);
      return;
    }
    let event;
    if (selectedSwitch === false) {
      event = {
        title: inputValue.trim(),
        filter: selectedCalendar,
        color: setColor(),
        singleDate: setDate(),
        allDay: true,
      };
    } else {
      event = {
        title: inputValue.trim(),
        filter: selectedCalendar,
        color: setColor(),
        startTime: new Date(startTime).toJSON(),
        endTime: new Date(endTime).toJSON(),
        allDay: false,
      };
    }
    if (eventModalOpen === 'edit')
      dispatch(editEvent({ ...event, id: eventForEditID }));
    else dispatch(saveNewEvent(event));
    clearModal();
  };

  const handleDelete = () => {
    if (eventModalOpen == 'edit') dispatch(deleteEvent(eventForEdit.id));
    clearModal();
  };

  const setModalAnimations = () => {
    if (eventModalOpen)
      return {
        animation: '$fadeIn',
        zIndex: '2',
        opactity: '1',
      };
    else
      return {
        animation: '$fadeOut',
        zIndex: '-1',
        opacity: '0',
      };
  };

  const classes = useStyles({
    modal: setModalAnimations(),
    modalHeight: `${allCalendars.length * 40}px`,
  });

  const handleSavingAllowed = () => {
    setSavingAllowed(true);
    setUserAlertOpen(false);
  };

  const handleSavingNotAllowed = () => {
    handleUserAlert(false);
    setSavingAllowed(false);
  };

  useEffect(() => {
    if (selectedSwitch) {
      if (validateDateTimeValues() && validateInputValue()) {
        handleSavingAllowed();
      } else {
        handleSavingNotAllowed();
      }
    } else
      validateInputValue() ? handleSavingAllowed() : handleSavingNotAllowed();
  }, [inputValue, startTime, endTime, selectedSwitch]);

  useEffect(() => {
    if (eventModalOpen === 'edit') {
      setInputValue(eventForEdit.title);
      setSelectedCalendar(eventForEdit.filter);
      titleRef.current.focus();
      if (eventForEdit.hasOwnProperty('singleDate')) {
        setSelectedSwitch(false);
        setSingleDate(setDateInputFormat(eventForEdit.singleDate));

        setStartTime(
          setDateTimeInputFormat(
            cleanUpTime(new Date(eventForEdit.singleDate.setHours(12)))
          )
        );
        setEndTime(
          setDateTimeInputFormat(
            cleanUpTime(new Date(eventForEdit.singleDate.setHours(13)))
          )
        );
      } else {
        setSelectedSwitch(true);
        setSingleDate(setDateInputFormat(eventForEdit.startTime));
        setStartTime(setDateTimeInputFormat(eventForEdit.startTime));
        setEndTime(setDateTimeInputFormat(eventForEdit.endTime));
      }
    } else return;
  }, [eventForEdit, eventModalOpen]);

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <ModalHeader
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSave={handleSave}
          handleDelete={handleDelete}
          clearModal={clearModal}
          titleRef={titleRef}
        />
        <div className={classes.modelBody}>
          <EventCalendars
            selectedCalendar={selectedCalendar}
            setSelectedCalendar={setSelectedCalendar}
          />
          <div className={classes.dateContent}>
            <SwitchSelectors
              selectedSwitch={selectedSwitch}
              setSelectedSwitch={setSelectedSwitch}
              selectedCalendar={selectedCalendar}
            />
            <TimeContainer
              selectedSwitch={selectedSwitch}
              singleDate={singleDate}
              setSingleDate={setSingleDate}
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
          </div>
        </div>
        <UserAlertDrawer
          userAlertOpen={userAlertOpen}
          setUserAlertOpen={setUserAlertOpen}
          alertList={alertList}
        />
      </div>
    </div>
  );
};

export default EventModal;
