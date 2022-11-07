import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

const NewCalendarForm = (props) => {
  const { calendarFormVisible } = props;
  const setCalendarFormVisible = () => {
    if (calendarFormVisible) return 'block';
    else return 'none';
  };
  const classes = useStyles({ display: setCalendarFormVisible() });
  return <div className={classes.newCalendarForm}>NewCalendarForm</div>;
};

NewCalendarForm.propTypes = {
  calendarFormVisible: PropTypes.bool,
};

export default NewCalendarForm;
