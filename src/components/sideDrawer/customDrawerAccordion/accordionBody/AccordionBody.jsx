import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import CalendarList from './calendarList/CalendarList';
import { useSelector } from 'react-redux';
import { selectCustomCalendars } from '../../../../reducers/appSettings';

const AccordionBody = (props) => {
  const { showAccordion } = props;
  const customCalendars = useSelector(selectCustomCalendars);

  const setAccordionHeight = () => {
    if (showAccordion) return `${customCalendars.length * 32}px`;
    else return '0';
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
