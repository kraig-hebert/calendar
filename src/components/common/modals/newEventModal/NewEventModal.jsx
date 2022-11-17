import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectNewEventModalOpen,
  eventModalClosed,
  selectDefaultCalendars,
  selectCustomCalendars,
} from '../../../../reducers/appSettings';
import { saveNewEvent } from '../../../../reducers/eventsSlice';
import { format } from 'date-fns';
import { useStyles } from './styles';
import { AiFillCloseCircle, AiFillSave } from 'react-icons/ai';
import CheckBox from '../../checkBox/CheckBox';
import SwitchSelectors from './switchSelectors/SwitchSelectors';
import EventCalendars from './eventCalendars/EventCalendars';

const NewEventModal = () => {
  const dispatch = useDispatch();
  const newEventModalOpen = useSelector(selectNewEventModalOpen);
  const customCalendars = useSelector(selectCustomCalendars);
  const [inputValue, setInputValue] = useState('');
  const [selectedSwitch, setSelectedSwitch] = useState('all-day');
  const [singleDate, setSingleDate] = useState(format(new Date(), 'yyyy-L-dd'));
  const [startTime, setStartTime] = useState(
    format(new Date(), 'yyyy-L-dd') + 'T12:00'
  );
  const [endTime, setEndTime] = useState(
    format(new Date(), 'yyyy-L-dd') + 'T12:00'
  );

  const handleSave = () => {
    if (selectedSwitch === 'all-day') {
      const newEvent = {
        title: inputValue,
        filter: 'green',
        singleDate: singleDate,
        allDay: true,
      };
      dispatch(saveNewEvent(newEvent));
    } else {
      const newEvent = {
        title: inputValue,
        filter: 'yellow',
        startTime: startTime,
        endTime: endTime,
        allDay: false,
      };
      dispatch(saveNewEvent(newEvent));
    }
  };

  const setStyles = () => {
    if (newEventModalOpen)
      return {
        display: 'flex',
        animation: '$fadeIn',
        zIndex: '2',
        opactity: '1',
      };
    else
      return {
        display: 'none',
        animation: '$fadeOut',
        zIndex: '-1',
        opacity: '0',
      };
  };

  const classes = useStyles(setStyles());

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.iconContainer}>
          <AiFillSave className={classes.icon} onClick={handleSave} />
          <AiFillCloseCircle
            className={classes.icon}
            onClick={(e) => dispatch(eventModalClosed())}
          />
        </div>
        <input
          type="text"
          name="title"
          id="title"
          value={inputValue}
          placeholder="Title"
          className={classes.titleInput}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <EventCalendars />
        <SwitchSelectors
          selectedSwitch={selectedSwitch}
          setSelectedSwitch={setSelectedSwitch}
        />
        <div className={classes.timeContainer}>
          {selectedSwitch === 'all-day' ? (
            <>
              <p>Date</p>
              <input
                type="date"
                name="date"
                id="date"
                className={classes.dateInput}
                value={singleDate}
                onChange={(e) => setSingleDate(e.target.value)}
              />
            </>
          ) : (
            <>
              <p>Start Time</p>
              <input
                type="datetime-local"
                name="start-date"
                id="start-date"
                className={classes.dateInput}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <p>End Time</p>
              <input
                type="datetime-local"
                name="end-date"
                id="end-date"
                className={classes.dateInput}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;
