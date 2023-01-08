import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleDown, FaPlus, FaMinus } from 'react-icons/fa';

import {
  selectCalendarFormOpen,
  calendarFormToggled,
  selectCalendarForEdit,
  filterRemoved,
} from '../../../../reducers/appSettings';
import { useStyles } from './styles';

const AccordionHeader = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const calendarFormOpen = useSelector(selectCalendarFormOpen);
  const calendarForEdit = useSelector(selectCalendarForEdit);
  const { title, calendarAccordionOpen, setCalendarAccordionOpen } = props;

  const handleCalendarFormClose = () => {
    if (calendarFormOpen === 'edit')
      dispatch(filterRemoved(calendarForEdit.filter));
    dispatch(calendarFormToggled(false));
  };

  const setDisplayedButtons = () => {
    if (title !== 'Calendars') {
      if (calendarFormOpen)
        return (
          <FaMinus
            className={classes.shrunkIcon}
            onClick={handleCalendarFormClose}
          />
        );
      else
        return (
          <FaPlus
            className={classes.shrunkIcon}
            onClick={(e) => dispatch(calendarFormToggled(true))}
          />
        );
    }
  };

  return (
    <div className={classes.header}>
      <span>{title}</span>
      <div className={classes.iconGroup}>
        {setDisplayedButtons()}
        {calendarAccordionOpen ? (
          <FaAngleDown
            className={classes.icon}
            onClick={(e) => setCalendarAccordionOpen(!calendarAccordionOpen)}
          />
        ) : (
          <FaAngleRight
            className={classes.icon}
            onClick={(e) => setCalendarAccordionOpen(!calendarAccordionOpen)}
          />
        )}
      </div>
    </div>
  );
};

AccordionHeader.propTypes = {
  title: PropTypes.string,
  calendarAccordionOpen: PropTypes.bool,
  setCalendarAccordionOpen: PropTypes.func,
};

export default AccordionHeader;
