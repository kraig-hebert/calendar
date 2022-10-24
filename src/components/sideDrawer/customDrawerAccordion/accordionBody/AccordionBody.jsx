import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import CalendarList from './calendarList/CalendarList';

const AccordionBody = (props) => {
  const { showAccordion } = props;
  const setAccordionHeight = () => {
    if (showAccordion) return '60px';
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
