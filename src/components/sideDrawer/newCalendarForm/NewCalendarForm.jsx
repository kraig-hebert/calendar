import React, { useState } from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAvailableColorFilters,
  newCalendarAdded,
  selectCustomCalendars,
} from '../../../reducers/appSettings';

const NewCalendarForm = (props) => {
  const dispatch = useDispatch();
  const { calendarFormVisible, setCalendarFormVisible } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(new Object());
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
    setCalendarFormVisible(false);
    setTimeout(() => {
      const newCalendar = {
        id: getID(customCalendars),
        title: inputValue,
      };
      dispatch(newCalendarAdded(newCalendar));
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
    };
  };

  const renderedFilters = availableColorFilters.map((color, index) => (
    <div key={index} style={setStyle(color)}></div>
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
      <button className={classes.saveButton} onClick={(e) => handleSave(e)}>
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
