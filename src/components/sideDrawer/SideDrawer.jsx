import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AiFillCloseCircle } from 'react-icons/ai';
import useSideDrawerToggle from '../../utils/useSideDrawerToggle';
import SmallMonthCalendar from '../common/smallMonthCalendar/SmallMonthCalendar';
import DefaultDrawerAccordion from './defaultDrawerAccordion/DefaultDrawerAccordion';
import { selectDrawerOpen } from '../../reducers/appSettings';
import { format } from 'date-fns';
import CustomerDrawerAccordion from './customDrawerAccordion/CustomerDrawerAccordion';
import { useStyles } from './styles';
import Accordion from '../common/accordion/Accordion';

const SideDrawer = () => {
  const drawerOpen = useSelector(selectDrawerOpen);
  const today = new Date();
  const classes = useStyles();
  const toggleSideDrawerClosed = useSideDrawerToggle(false);
  const month = format(today, 'MMMM y');
  const [calendarFormVisible, setCalendarFormVisible] = useState(false);

  return (
    <>
      {drawerOpen && (
        <div className={classes.drawerContainer}>
          <div className={classes.iconContainer}>
            <AiFillCloseCircle
              className={classes.closeIcon}
              onClick={toggleSideDrawerClosed}
            />
          </div>
          <p className={classes.monthName}>{month}</p>
          <SmallMonthCalendar
            year={today.getFullYear()}
            month={today.getMonth()}
            date={today}
          />
          <DefaultDrawerAccordion />
          <CustomerDrawerAccordion
            calendarFormVisible={calendarFormVisible}
            setCalendarFormVisible={setCalendarFormVisible}
          />
          <Accordion
            title="My Calendars"
            calendarFormVisible={calendarFormVisible}
            setCalendarFormVisible={setCalendarFormVisible}
          />
        </div>
      )}
    </>
  );
};

export default SideDrawer;
