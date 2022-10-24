import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

const AccordionHeader = (props) => {
  const classes = useStyles();
  const { calendarAccordionOpen, setCalendarAccordionOpen } = props;
  return (
    <div
      className={classes.header}
      onClick={(e) => setCalendarAccordionOpen(!calendarAccordionOpen)}
    >
      <span>Calendars</span>
      {calendarAccordionOpen ? (
        <AiOutlineMinusSquare className={classes.icon} />
      ) : (
        <AiOutlinePlusSquare className={classes.icon} />
      )}
    </div>
  );
};

AccordionHeader.propTypes = {
  calendarAccordionOpen: PropTypes.bool,
  setCalendarAccordionOpen: PropTypes.func,
};

export default AccordionHeader;
