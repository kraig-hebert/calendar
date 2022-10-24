import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

import { FaAngleRight, FaAngleDown, FaPlus } from 'react-icons/fa';

const AccordionHeader = (props) => {
  const classes = useStyles();
  const { calendarAccordionOpen, setCalendarAccordionOpen } = props;

  return (
    <div className={classes.header}>
      <span>My Calendars</span>
      <div className={classes.iconGroup}>
        <FaPlus className={classes.shrunkIcon} />
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
};

export default AccordionHeader;
