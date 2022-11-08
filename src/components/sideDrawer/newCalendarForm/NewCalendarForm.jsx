import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

const NewCalendarForm = (props) => {
  const { calendarFormVisible } = props;
  const setCalendarFormVisible = () => {
    if (calendarFormVisible) return '175px';
    else return '0';
  };
  const classes = useStyles({ height: setCalendarFormVisible() });
  return (
    <div className={classes.newCalendarForm}>
      <p>Add New Calendar</p>
    </div>
  );
};

NewCalendarForm.propTypes = {
  calendarFormVisible: PropTypes.bool,
};

export default NewCalendarForm;
