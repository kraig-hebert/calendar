import React, { useState } from 'react';
import AccordionBody from './accordionBody/AccordionBody';
import AccordionHeader from './accordionHeader/AccordionHeader';
import { useStyles } from './styles';

const DrawerAccordian = () => {
  const classes = useStyles();
  const [calendarAccordionOpen, setCalendarAccordionOpen] = useState(true);

  return (
    <div className={classes.accordion}>
      <AccordionHeader
        calendarAccordionOpen={calendarAccordionOpen}
        setCalendarAccordionOpen={setCalendarAccordionOpen}
      />
      <AccordionBody showAccordion={calendarAccordionOpen} />
    </div>
  );
};

export default DrawerAccordian;
