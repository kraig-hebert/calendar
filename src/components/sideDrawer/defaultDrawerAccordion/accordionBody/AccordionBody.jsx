import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CalendarList from './calendarList/CalendarList';
import { selectDefaultCalendars } from '../../../../reducers/appSettings';
import { useStyles } from './styles';

const AccordionBody = (props) => {
  const { showAccordion } = props;
  const defaultCalendars = useSelector(selectDefaultCalendars);
  const setAccordionHeight = () => {
    if (showAccordion) return `${defaultCalendars.length * 30}px`;
    else return '0px';
  };
  const classes = useStyles({ height: setAccordionHeight() });
  return (
    <div className={classes.body}>
      <CalendarList />
    </div>
  );
};

AccordionBody.propTypes = {
  showAccordion: PropTypes.bool,
};

export default AccordionBody;
