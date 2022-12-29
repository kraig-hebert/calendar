import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleDown, FaPlus, FaMinus } from 'react-icons/fa';

import { useStyles } from './styles';

const AccordionHeader = (props) => {
  const classes = useStyles();
  const {
    title,
    calendarAccordionOpen,
    setCalendarAccordionOpen,
    calendarFormVisible,
    setCalendarFormVisible,
  } = props;

  const setDisplayedButtons = () => {
    if (title !== 'Calendars') {
      if (calendarFormVisible)
        return (
          <FaMinus
            className={classes.shrunkIcon}
            onClick={(e) => setCalendarFormVisible(!calendarFormVisible)}
          />
        );
      else
        return (
          <FaPlus
            className={classes.shrunkIcon}
            onClick={(e) => setCalendarFormVisible(!calendarFormVisible)}
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
  calendarFormVisible: PropTypes.bool,
  setCalendarFormVisible: PropTypes.func,
};

export default AccordionHeader;
