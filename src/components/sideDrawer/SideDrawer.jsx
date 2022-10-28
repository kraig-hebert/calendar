import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import useSideDrawerToggle from '../../utils/useSideDrawerToggle';
import SmallMonthCalendar from '../common/smallMonthCalendar/SmallMonthCalendar';
import DefaultDrawerAccordion from './defaultDrawerAccordion/DefaultDrawerAccordion';

import {
  selectCurrentDate,
  selectDrawerOpen,
} from '../../reducers/appSettings';
import { format } from 'date-fns';
import CustomerDrawerAccordion from './customDrawerAccordion/CustomerDrawerAccordion';

const SideDrawer = () => {
  const drawerOpen = useSelector(selectDrawerOpen);
  const date = useSelector(selectCurrentDate);
  const classes = useStyles();
  const toggleSideDrawerClosed = useSideDrawerToggle(false);
  const month = format(date, 'MMMM y');

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
            year={date.getFullYear()}
            month={date.getMonth()}
            date={date}
          />
          <DefaultDrawerAccordion />
          <CustomerDrawerAccordion />
        </div>
      )}
    </>
  );
};

export default SideDrawer;
