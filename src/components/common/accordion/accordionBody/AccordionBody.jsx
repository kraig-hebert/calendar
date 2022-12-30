import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';

import CalendarList from './calendarList/CalendarList';
import {
  selectCustomCalendars,
  selectDefaultCalendars,
} from '../../../../reducers/appSettings';
import { useStyles } from './styles';

const AccordionBody = (props) => {
  const { showAccordion, type } = props;
  const theme = useTheme();
  const customCalendars = useSelector(selectCustomCalendars);
  const defaultCalendars = useSelector(selectDefaultCalendars);

  const setAccordionHeight = () => {
    if (showAccordion) {
      if (type === 'default') return `${defaultCalendars.length * 30}px`;
      else return `${customCalendars.length * 30}px`;
    } else return '0px';
  };
  const classes = useStyles({ height: setAccordionHeight() });
  const setProps = () => {
    if (type === 'default')
      return {
        checkColor: theme.dark.main,
        calendarList: defaultCalendars,
      };
    else
      return {
        checkColor: theme.light.main,
        calendarList: customCalendars,
      };
  };
  return (
    <div className={classes.body}>
      <CalendarList props={setProps()} />
    </div>
  );
};

AccordionBody.propTypes = {
  showAccordion: PropTypes.bool,
  type: PropTypes.string,
};

export default AccordionBody;
