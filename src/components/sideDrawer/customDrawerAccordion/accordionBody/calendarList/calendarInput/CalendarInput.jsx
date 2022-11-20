import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import CheckBox from '../../../../../common/checkBox/CheckBox';
import { BsTrashFill, BsPencilFill } from 'react-icons/bs';

const CalendarInput = (props) => {
  const { title, checkBoxBackgroundColor, checkColor } = props;
  const classes = useStyles();

  const deleteCustomCalendar = () => {};
  const editCustomCalendar = () => {};

  return (
    <div className={classes.inputContainer}>
      <div className={classes.optionsContainer}>
        <BsTrashFill onClick={deleteCustomCalendar} />
        <BsPencilFill onClick={editCustomCalendar} />
      </div>
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
};
export default CalendarInput;
