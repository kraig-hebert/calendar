import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleDown, FaPlus, FaMinus } from 'react-icons/fa';

import {
  selectCalendarFormOpen,
  calendarFormToggled,
  selectCalendarForEdit,
} from '../../../../reducers/appSettings';
import { useStyles } from './styles';

const AccordionHeader = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const calendarFormOpen = useSelector(selectCalendarFormOpen);
  const { title, calendarAccordionOpen, setCalendarAccordionOpen } = props;

  const setDisplayedButtons = () => {
    if (title !== 'Calendars') {
      if (calendarFormOpen)
        return (
          <FaMinus
            className={classes.shrunkIcon}
            onClick={(e) => dispatch(calendarFormToggled(false))}
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
