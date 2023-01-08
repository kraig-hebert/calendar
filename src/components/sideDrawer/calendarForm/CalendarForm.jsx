import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'react-jss';

import {
  selectAvailableColorFilters,
  addNewCalendar,
  selectCustomCalendars,
  selectCalendarFormOpen,
  calendarFormToggled,
  selectCalendarForEdit,
  editCustomCalendar,
} from '../../../reducers/appSettings';
import { updateCalendarEventFilters } from '../../../reducers/eventsSlice';
import { useStyles } from './styles';

const CalendarForm = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const calendarFormOpen = useSelector(selectCalendarFormOpen);
  const calendarForEdit = useSelector(selectCalendarForEdit);

  const setFormHeight = () => {
    if (calendarFormOpen) return '200px';
    else return '0';
  };
  const classes = useStyles({ height: setFormHeight() });
  const availableColorFilters = useSelector(selectAvailableColorFilters);
  const customCalendars = useSelector(selectCustomCalendars);

  // return next available id
  const getID = () => {
    if (calendarFormOpen === 'edit') return calendarForEdit.id;
    else
      return customCalendars.length
        ? customCalendars[customCalendars.length - 1].id + 1
        : 1;
  };

  const clearForm = () => {
    dispatch(calendarFormToggled(false));

    // set timeout to match newCalendarForm transiton time
    setTimeout(() => {
      setInputValue('');
      setSelectedFilter('');
    }, 250);
  };

  const handleSave = (e) => {
    const calendar = {
      id: getID(),
      title: inputValue,
      filter: selectedFilter,
    };
    if (calendarFormOpen === 'edit') {
      dispatch(editCustomCalendar(calendar));
      dispatch(
        updateCalendarEventFilters({
          newTitle: calendar.title,
          oldCalendarTitle: calendarForEdit.title,
        })
      );
    } else dispatch(addNewCalendar(calendar));
    clearForm();
  };

  const setStyle = (color) => {
    return {
      alignSelf: 'center',
      justifySelf: 'center',
      display: 'flex',
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      backgroundColor: color,
      border: '2px solid ' + theme.dark.main,
      borderStyle: color === selectedFilter ? 'solid' : 'none',
      opacity: color !== selectedFilter ? '0.5' : '1',
    };
  };

  const renderedFilters = availableColorFilters.map((color, index) => (
    <div
      key={index}
      style={setStyle(color)}
      onClick={(e) => setSelectedFilter(color)}
    ></div>
  ));

  useEffect(() => {
    if (calendarFormOpen === 'edit') {
      setInputValue(calendarForEdit.title);
      setSelectedFilter(calendarForEdit.filter);
    } else if (!calendarFormOpen) {
      setInputValue('');
      setSelectedFilter('');
    }
  }, [calendarForEdit, calendarFormOpen]);
  return (
    <div className={classes.newCalendarForm}>
      <h2>
        {calendarFormOpen !== 'edit' ? 'Add New Calendar' : 'Edit Calendar'}
      </h2>
      <input
        type="text"
        name="title"
        id="title"
        value={inputValue}
        placeholder="Title"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Select Filter Color:</p>
      <div className={classes.filtersContainer}>{renderedFilters}</div>
      <button
        className={classes.saveButton}
        onClick={(e) => handleSave(e)}
        disabled={!selectedFilter | !inputValue}
      >
        <h3>{calendarFormOpen !== 'edit' ? 'Save' : 'Edit'}</h3>
      </button>
    </div>
  );
};

export default CalendarForm;
