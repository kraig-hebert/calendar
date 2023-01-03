import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectNewEventModalOpen,
  eventModalClosed,
  selectDefaultCalendars,
  selectDefaultCalendarTitles,
} from '../../../../reducers/appSettings';
import { saveNewEvent } from '../../../../reducers/eventsSlice';
import { format, isAfter } from 'date-fns';
import { useStyles } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';
import SwitchSelectors from './switchSelectors/SwitchSelectors';
import EventCalendars from './eventCalendars/EventCalendars';
import { useTheme } from 'react-jss';

const NewEventModal = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const newEventModalOpen = useSelector(selectNewEventModalOpen);
  const defaultCalendarTitles = useSelector(selectDefaultCalendarTitles);
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const [inputValue, setInputValue] = useState('');
  const [selectedSwitch, setSelectedSwitch] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState({
    ...defaultCalendars[0],
  });
  const [singleDate, setSingleDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  const [startTime, setStartTime] = useState(
    format(new Date(), 'yyyy-MM-dd') + 'T12:00:00'
  );
  const [endTime, setEndTime] = useState(
    format(new Date(), 'yyyy-MM-dd') + 'T12:00:00'
  );
  const [savingAllowed, setSavingAllowed] = useState(false);

  const clearModal = () => {
    dispatch(eventModalClosed());
    // set delay to match $fadeOut time so reset isn't visible
    setTimeout(() => {
      setInputValue('');
      setSelectedSwitch(false);
      setSelectedCalendar({ ...defaultCalendars[0] });
      setSingleDate(format(new Date(), 'yyyy-MM-dd'));
      setStartTime(format(new Date(), 'yyyy-MM-dd') + 'T12:00:00');
      setEndTime(format(new Date(), 'yyyy-MM-dd') + 'T12:00:00');
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
    if (defaultCalendarTitles.includes(selectedCalendar.title))
      return theme.dark.main;
    else return theme.light.main;
  };

  const handleSave = () => {
    if (!savingAllowed) return;
    if (selectedSwitch === false) {
      const newEvent = {
        title: inputValue,
        filter: selectedCalendar.title,
        color: setColor(),
        singleDate: setDate(),
        allDay: true,
      };
      dispatch(saveNewEvent(newEvent));
      clearModal();
    } else {
      const newEvent = {
        title: inputValue,
        filter: selectedCalendar.title,
        color: setColor(),
        startTime: new Date(startTime).toJSON(),
        endTime: new Date(endTime).toJSON(),
        allDay: false,
      };
      dispatch(saveNewEvent(newEvent));
      clearModal();
    }
  };

  const setModalAnimations = () => {
    if (newEventModalOpen)
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

  useEffect(() => {
    if (selectedSwitch) {
      if (isAfter(new Date(endTime), new Date(startTime)) && inputValue)
        setSavingAllowed(true);
      else setSavingAllowed(false);
    } else inputValue ? setSavingAllowed(true) : setSavingAllowed(false);
  }, [inputValue, startTime, endTime, selectedSwitch]);

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.iconContainer}>
          <FaSave
            className={
              savingAllowed ? classes.iconActive : classes.iconDisabled
            }
            onClick={handleSave}
          />
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
          <AiFillCloseCircle
            className={classes.iconActive}
            onClick={clearModal}
          />
        </div>
        <EventCalendars
          selectedCalendar={selectedCalendar}
          setSelectedCalendar={setSelectedCalendar}
        />
        <SwitchSelectors
          selectedSwitch={selectedSwitch}
          setSelectedSwitch={setSelectedSwitch}
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

export default NewEventModal;
