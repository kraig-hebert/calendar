import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

import { useStyles } from './styles';

const AccordionHeader = (props) => {
  const classes = useStyles();
  const { calendarAccordionOpen, setCalendarAccordionOpen } = props;
  return (
    <div className={classes.header}>
      <span>Calendars</span>
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
  );
};

AccordionHeader.propTypes = {
  calendarAccordionOpen: PropTypes.bool,
  setCalendarAccordionOpen: PropTypes.func,
};

export default AccordionHeader;
