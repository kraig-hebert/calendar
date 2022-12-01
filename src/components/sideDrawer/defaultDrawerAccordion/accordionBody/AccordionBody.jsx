import React from 'react';
import PropTypes from 'prop-types';

import CalendarList from './calendarList/CalendarList';
import { useStyles } from './styles';

const AccordionBody = (props) => {
  const { showAccordion } = props;
  const setAccordionHeight = () => {
    if (showAccordion) return '125px';
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
