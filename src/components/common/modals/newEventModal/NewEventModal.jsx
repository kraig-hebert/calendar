import React, { useState, useEffect } from 'react';
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

const NewEventModal = () => {
  const dispatch = useDispatch();
  const newEventModalOpen = useSelector(selectNewEventModalOpen);
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const customCalendars = useSelector(selectCustomCalendars);
  const [inputValue, setInputValue] = useState('');
  const [selectedSwitch, setSelectedSwitch] = useState('all-day');
  const [singleDate, setSingleDate] = useState(format(new Date(), 'yyyy-L-dd'));
  const [startDate, setStartDate] = useState(
    format(new Date(), 'yyyy-L-dd') + 'T12:00'
  );
  const [endDate, setEndDate] = useState(
    format(new Date(), 'yyyy-L-dd') + 'T12:00'
  );

  const handleSave = () => {
    const newEvent = {
      title: inputValue,
      filter: 'green',
      singleDate: singleDate,
      allDay: true,
    };
    dispatch(saveNewEvent(newEvent));
  };

  const setStyles = () => {
    if (newEventModalOpen)
      return {
        display: 'flex',
        animation: '$fadeIn',
        zIndex: '2',
        opactity: '1',
        calendarListLength: customCalendars.length,
      };
    else
      return {
        display: 'none',
        animation: '$fadeOut',
        zIndex: '-1',
        opacity: '0',
        calendarListLength: customCalendars.length,
      };
  };

  const classes = useStyles(setStyles());
  const renderedDefaultCalendars = defaultCalendars.map((calendar, index) => (
    <div key={index} className={classes.calendar}>
      <CheckBox checkBoxBackgroundColor={calendar.filter} checkColor="#000" />
      <span>{calendar.title}</span>
    </div>
  ));
  const renderedCustomCalendars = customCalendars.map((calendar, index) => (
    <div key={index} className={classes.calendar}>
      <CheckBox checkBoxBackgroundColor={calendar.filter} checkColor="#fff" />
      <span>{calendar.title}</span>
    </div>
  ));

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
        <div className={classes.defaultCalendarRow}>
          {renderedDefaultCalendars}
        </div>
        {renderedCustomCalendars.length > 0 && (
          <div className={classes.customCalendarRow}>
            {renderedCustomCalendars}
          </div>
        )}
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <p>End Time</p>
              <input
                type="datetime-local"
                name="end-date"
                id="end-date"
                className={classes.dateInput}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;