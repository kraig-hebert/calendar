import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AccordionBody from './accordionBody/AccordionBody';
import AccordionHeader from './accordionHeader/AccordionHeader';
import NewCalendarForm from '../../sideDrawer/newCalendarForm/NewCalendarForm';
import { useStyles } from './styles';

const Accordion = (props) => {
  const { title, setCalendarFormVisible, calendarFormVisible } = props;
  const classes = useStyles();
  const [calendarAccordionOpen, setCalendarAccordionOpen] = useState(true);
  const setType = () => {
    if (title === 'Calendars') return 'default';
    else return 'custom';
  };
  return (
    <div className={classes.accordion}>
      <AccordionHeader
        title={title}
        calendarAccordionOpen={calendarAccordionOpen}
        setCalendarAccordionOpen={setCalendarAccordionOpen}
        calendarFormVisible={calendarFormVisible}
        setCalendarFormVisible={setCalendarFormVisible}
      />
      <AccordionBody showAccordion={calendarAccordionOpen} type={setType()} />
      {title !== 'Calendars' && (
        <NewCalendarForm
          calendarFormVisible={calendarFormVisible}
          setCalendarFormVisible={setCalendarFormVisible}
        />
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  calendarFormVisible: PropTypes.bool,
  setCalendaFormVisible: PropTypes.func,
};

export default Accordion;
