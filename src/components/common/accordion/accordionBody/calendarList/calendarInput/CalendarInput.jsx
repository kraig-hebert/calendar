import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BsTrashFill, BsPencilFill } from 'react-icons/bs';

import {
  deleteCustomCalendar,
  filterReturned,
} from '../../../../../../reducers/appSettings';
import { deleteCalendarEvents } from '../../../../../../reducers/eventsSlice';
import CheckBox from '../../../../checkBox/CheckBox';
import { useStyles } from './styles';

const CalendarInput = (props) => {
  const { title, checkBoxBackgroundColor, checkColor, isEditable } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(filterReturned(checkBoxBackgroundColor));
    dispatch(deleteCustomCalendar(title));
    dispatch(deleteCalendarEvents(title));
  };

  const editCustomCalendar = () => {};

  return (
    <div className={classes.inputContainer}>
      {isEditable && (
        <div className={classes.optionsContainer}>
          <BsTrashFill onClick={handleDelete} />
          <BsPencilFill onClick={editCustomCalendar} />
        </div>
      )}

      <CheckBox
        checkBoxBackgroundColor={checkBoxBackgroundColor}
        checkColor={checkColor}
        startChecked={true}
      />
      <span className={classes.label}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </span>
    </div>
  );
};

CalendarInput.propTypes = {
  title: PropTypes.string,
  checkBoxBackgroundColor: PropTypes.string,
  checkColor: PropTypes.string,
  isEditable: PropTypes.bool,
};

export default CalendarInput;
