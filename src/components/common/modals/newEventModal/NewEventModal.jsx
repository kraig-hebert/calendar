import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectNewEventModalOpen,
  eventModalClosed,
  selectDefaultCalendars,
  selectCustomCalendars,
} from '../../../../reducers/appSettings';
import { useStyles } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import CheckBox from '../../checkBox/CheckBox';
import SwitchSelectors from './switchSelectors/SwitchSelectors';

const NewEventModal = () => {
  const dispatch = useDispatch();
  const newEventModalOpen = useSelector(selectNewEventModalOpen);
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const customCalendars = useSelector(selectCustomCalendars);
  const [inputValue, setInputValue] = useState('');
  const [selectedSwitch, setSelectedSwitch] = useState('all-day');

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
          <AiFillCloseCircle
            className={classes.closeIcon}
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
            <input
              type="date"
              name="date"
              id="date"
              className={classes.dateInput}
            />
          ) : (
            <>
              <p>Start Time</p>
              <input
                type="datetime-local"
                name="date"
                id="date"
                className={classes.dateInput}
              />
              <p>End Time</p>
              <input
                type="datetime-local"
                name="date"
                id="date"
                className={classes.dateInput}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;
