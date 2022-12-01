import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'react-jss';

import {
  selectAvailableColorFilters,
  addNewCalendar,
  selectCustomCalendars,
} from '../../../reducers/appSettings';
import { useStyles } from './styles';

const NewCalendarForm = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { calendarFormVisible, setCalendarFormVisible } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const setFormHeight = () => {
    if (calendarFormVisible) return '200px';
    else return '0';
  };
  const classes = useStyles({ height: setFormHeight() });
  const availableColorFilters = useSelector(selectAvailableColorFilters);
  const customCalendars = useSelector(selectCustomCalendars);

  // return next available id
  const getID = (calendarList) =>
    calendarList.length ? calendarList[calendarList.length - 1].id + 1 : 1;

  const handleSave = (e) => {
    setInputValue('');
    setSelectedFilter('');
    setCalendarFormVisible(false);

    // set timeout to match newCalendarForm transiton time
    setTimeout(() => {
      const newCalendar = {
        id: getID(customCalendars),
        title: inputValue,
        filter: selectedFilter,
      };
      dispatch(addNewCalendar(newCalendar));
    }, 250);
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
  return (
    <div className={classes.newCalendarForm}>
      <h2>Add New Calendar</h2>
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
        <h3>Save</h3>
      </button>
    </div>
  );
};

NewCalendarForm.propTypes = {
  calendarFormVisible: PropTypes.bool,
  setCalendarFormVisible: PropTypes.func,
};

export default NewCalendarForm;
