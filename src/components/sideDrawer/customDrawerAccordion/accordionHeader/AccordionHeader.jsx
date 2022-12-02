import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleDown, FaPlus, FaMinus } from 'react-icons/fa';

import { useStyles } from './styles';

const AccordionHeader = (props) => {
  const classes = useStyles();
  const {
    calendarAccordionOpen,
    setCalendarAccordionOpen,
    calendarFormVisible,
    setCalendarFormVisible,
  } = props;

  return (
    <div className={classes.header}>
      <span>My Calendars</span>
      <div className={classes.iconGroup}>
        {calendarFormVisible ? (
          <FaMinus
            className={classes.shrunkIcon}
            onClick={(e) => setCalendarFormVisible(!calendarFormVisible)}
          />
        ) : (
          <FaPlus
            className={classes.shrunkIcon}
            onClick={(e) => setCalendarFormVisible(!calendarFormVisible)}
          />
        )}

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
  calendarAccordionOpen: PropTypes.bool,
  setCalendarAccordionOpen: PropTypes.func,
  calendarFormVisible: PropTypes.bool,
  setCalendarFormVisible: PropTypes.func,
};

export default AccordionHeader;
