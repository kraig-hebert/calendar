import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectEventModalOpen,
  eventModalClosed,
  selectEventForEditID,
  selectDefaultCalendars,
  selectDefaultCalendarTitles,
} from '../../../../reducers/appSettings';
import {
  saveNewEvent,
  editEvent,
  selectEvents,
  deleteEvent,
} from '../../../../reducers/eventsSlice';
import { format, isAfter, addHours } from 'date-fns';
import { useStyles } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaSave, FaTrash } from 'react-icons/fa';
import SwitchSelectors from './switchSelectors/SwitchSelectors';
import EventCalendars from './eventCalendars/EventCalendars';
import { useTheme } from 'react-jss';

const EventModal = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const eventModalOpen = useSelector(selectEventModalOpen);
  const eventForEditID = useSelector(selectEventForEditID);
  const events = useSelector(selectEvents);
  const eventForEdit = events.filter((event) => event.id === eventForEditID)[0];
  const defaultCalendarTitles = useSelector(selectDefaultCalendarTitles);
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const [inputValue, setInputValue] = useState('');
  const [selectedSwitch, setSelectedSwitch] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState(
    defaultCalendars[0].title
  );

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

  const [savingAllowed, setSavingAllowed] = useState(false);

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

  const handleSave = () => {
    if (!savingAllowed) return;
    let event;
    if (selectedSwitch === false) {
      event = {
        title: inputValue,
        filter: selectedCalendar,
        color: setColor(),
        singleDate: setDate(),
        allDay: true,
      };
    } else {
      event = {
        title: inputValue,
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
    dispatch(deleteEvent(eventForEdit.id));
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
  const setDateInputAnimations = () => {
    if (selectedSwitch === false)
      return {
        dateContainer: {
          animation: '$dateMoveIn',
          opactity: '1',
          width: '100%',
        },
        dateTimeContainer: {
          animation: '$dateMoveOut',
          opacity: '0',
          width: '0%',
        },
      };
    else
      return {
        dateContainer: {
          animation: '$dateMoveOut',
          opacity: '0',
          width: '0%',
        },
        dateTimeContainer: {
          animation: '$dateMoveIn',
          opactity: '1',
          width: '100%',
        },
      };
  };

  const classes = useStyles({
    modal: setModalAnimations(),
    dateInputs: setDateInputAnimations(),
  });

  const checkSavingAllowed = () =>
    savingAllowed ? classes.iconActive : classes.iconDisabled;
  const checkDelete = () =>
    eventModalOpen === 'edit' ? classes.iconActive : classes.iconDisabled;

  useEffect(() => {
    if (selectedSwitch) {
      if (isAfter(new Date(endTime), new Date(startTime)) && inputValue)
        setSavingAllowed(true);
      else setSavingAllowed(false);
    } else inputValue ? setSavingAllowed(true) : setSavingAllowed(false);
  }, [inputValue, startTime, endTime, selectedSwitch]);

  useEffect(() => {
    if (eventModalOpen === 'edit') {
      setInputValue(eventForEdit.title);
      setSelectedCalendar(eventForEdit.filter);
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
        <div className={classes.modalHeader}>
          <div className={classes.iconContainer}>
            <FaSave className={checkSavingAllowed()} onClick={handleSave} />
            <FaTrash className={checkDelete()} onClick={handleDelete} />
          </div>
          <input
            type="text"
            name="title"
            id="title"
            value={inputValue}
            placeholder="Title"
            className={classes.titleInput}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <div className={classes.iconContainer}>
            <AiFillCloseCircle
              className={classes.iconActive}
              onClick={clearModal}
            />
          </div>
        </div>
        <EventCalendars
          selectedCalendar={selectedCalendar}
          setSelectedCalendar={setSelectedCalendar}
        />
        <SwitchSelectors
          selectedSwitch={selectedSwitch}
          setSelectedSwitch={setSelectedSwitch}
          selectedCalendar={selectedCalendar}
        />
        <div className={classes.timeContainer}>
          <div className={classes.dateContainer}>
            <div className={classes.dateInputContainer}>
              <p>Date</p>
              <input
                type="date"
                name="date"
                id="date"
                className={classes.dateInput}
                value={singleDate}
                onChange={(e) => setSingleDate(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.dateTimeContainer}>
            <div className={classes.dateInputContainer}>
              <p>Start Time</p>
              <input
                type="datetime-local"
                name="start-date"
                id="start-date"
                className={classes.dateInput}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className={classes.dateInputContainer}>
              <p>End Time</p>
              <input
                type="datetime-local"
                name="end-date"
                id="end-date"
                className={classes.dateInput}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
