import React from 'react';
import PropTypes from 'prop-types';

import CalendarInput from './calendarInput/CalendarInput';

const CalendarList = (props) => {
  const { calendarType, calendarList, checkColor } = props.props;
  const renderedCalendarList = calendarList.map((calendar, index) => {
    return (
      <CalendarInput
        title={calendar.title}
        key={index}
        checkBoxBackgroundColor={calendar.filter}
        checkColor={checkColor}
        isEditable={calendarType === 'custom' ? true : false}
      />
    );
  });
  return <>{renderedCalendarList}</>;
};

CalendarList.propTypes = {
  calendarType: PropTypes.string,
  checkColor: PropTypes.string,
  calendarList: PropTypes.array,
};

export default CalendarList;
