import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BsTrashFill, BsPencilFill } from 'react-icons/bs';

import {
  deleteCustomCalendar,
  filterReturned,
  calendarEditClicked,
  calendarFormToggled,
} from '../../../../../../reducers/appSettings';
import { deleteCalendarEvents } from '../../../../../../reducers/eventsSlice';
import CheckBox from '../../../../checkBox/CheckBox';
import { useStyles } from './styles';

const CalendarInput = (props) => {
  const { calendar, checkColor, isEditable, startChecked } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(filterReturned(calendar.filter));
    dispatch(deleteCustomCalendar(calendar.title));
    dispatch(deleteCalendarEvents(calendar.title));
  };

  const editCustomCalendar = () => {
    dispatch(filterReturned(calendar.filter));
    dispatch(calendarEditClicked(calendar.title));
    dispatch(calendarFormToggled('edit'));
  };

  return (
    <div
      className={
        isEditable ? classes.customContainer : classes.defaultContainer
      }
    >
      {isEditable && (
        <div className={classes.optionsContainer}>
          <BsTrashFill onClick={handleDelete} />
          <BsPencilFill onClick={editCustomCalendar} />
        </div>
      )}

      <CheckBox
        checkBoxBackgroundColor={calendar.filter}
        checkColor={checkColor}
        startChecked={startChecked}
        title={calendar.title}
      />
      <span className={classes.label}>
        {calendar.title.charAt(0).toUpperCase() + calendar.title.slice(1)}
      </span>
    </div>
  );
};

CalendarInput.propTypes = {
  calendar: PropTypes.object,
  checkColor: PropTypes.string,
  isEditable: PropTypes.bool,
  startChecked: PropTypes.bool,
};

export default CalendarInput;
