import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AccordionBody from './accordionBody/AccordionBody';
import AccordionHeader from './accordionHeader/AccordionHeader';
import NewCalendarForm from '../../sideDrawer/newCalendarForm/NewCalendarForm';
import { useStyles } from './styles';

const CustomerDrawerAccordion = (props) => {
  const { setCalendarFormVisible, calendarFormVisible } = props;
  const classes = useStyles();
  const [calendarAccordionOpen, setCalendarAccordionOpen] = useState(true);

  return (
    <div className={classes.accordion}>
      <AccordionHeader
        calendarAccordionOpen={calendarAccordionOpen}
        setCalendarAccordionOpen={setCalendarAccordionOpen}
        calendarFormVisible={calendarFormVisible}
        setCalendarFormVisible={setCalendarFormVisible}
      />
      <AccordionBody
        showAccordion={calendarAccordionOpen}
        calendarFormVisible={calendarFormVisible}
      />
      <NewCalendarForm
        calendarFormVisible={calendarFormVisible}
        setCalendarFormVisible={setCalendarFormVisible}
      />
    </div>
  );
};

CustomerDrawerAccordion.propTypes = {
  calendarFormVisible: PropTypes.bool,
  setCalendaFormVisible: PropTypes.func,
};

export default CustomerDrawerAccordion;
