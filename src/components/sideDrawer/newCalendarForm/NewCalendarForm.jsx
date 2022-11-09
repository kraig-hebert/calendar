import React, { useState } from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

const NewCalendarForm = (props) => {
  const { calendarFormVisible } = props;
  const [inputValue, setInputValue] = useState('');
  const setCalendarFormVisible = () => {
    if (calendarFormVisible) return '250px';
    else return '0';
  };
  const classes = useStyles({ height: setCalendarFormVisible() });

  const colors = [
    'black',
    'yellow',
    'red',
    'blue',
    'pink',
    'brown',
    'green',
    'orange',
  ];
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

  const renderedFilters = colors.map((color, index) => (
    <div key={index} style={setStyle(color)}></div>
  ));
  console.log(renderedFilters);
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
      <button className={classes.saveButton}>
        <h3>Save</h3>
      </button>
    </div>
  );
};

NewCalendarForm.propTypes = {
  calendarFormVisible: PropTypes.bool,
};

export default NewCalendarForm;
