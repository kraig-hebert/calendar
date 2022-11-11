import React, { useState } from 'react';
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

const NewEventModal = () => {
  const dispatch = useDispatch();
  const newEventModalOpen = useSelector(selectNewEventModalOpen);
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const customCalendars = useSelector(selectCustomCalendars);
  const [inputValue, setInputValue] = useState('');

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
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className={classes.defaultCalendarRow}>
          {renderedDefaultCalendars}
        </div>
        <div className={classes.customCalendarRow}>
          {renderedCustomCalendars}
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;
