import React from 'react';
import PropTypes from 'prop-types';

import CalendarInput from './calendarInput/CalendarInput';

const CalendarList = (props) => {
  const { calendarList, checkColor } = props.props;
  const renderedCalendarList = calendarList.map((calendar, index) => {
    return (
      <CalendarInput
        title={calendar.title}
        key={index}
        checkBoxBackgroundColor={calendar.filter}
        checkColor={checkColor}
      />
    );
  });
  return <>{renderedCalendarList}</>;
};

CalendarList.propTypes = {
  checkColor: PropTypes.string,
  calendarList: PropTypes.array,
};

export default CalendarList;
