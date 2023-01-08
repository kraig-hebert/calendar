import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectActiveFilters } from '../../../../../reducers/appSettings';
import CalendarInput from './calendarInput/CalendarInput';

const CalendarList = (props) => {
  const { calendarType, calendarList, checkColor } = props.props;
  const activeFilters = useSelector(selectActiveFilters);
  const renderedCalendarList = calendarList.map((calendar, index) => {
    return (
      <CalendarInput
        calendar={calendar}
        key={index}
        checkColor={checkColor}
        isEditable={calendarType === 'custom' ? true : false}
        startChecked={activeFilters.includes(calendar.title) ? true : false}
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
