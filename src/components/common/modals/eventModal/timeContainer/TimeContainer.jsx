import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCalendarAlt } from 'react-icons/fa';

import DateInput from '../../../dateInput/DateInput';
import { useStyles } from './styles';

const TimeContainer = (props) => {
  const {
    selectedSwitch,
    singleDate,
    setSingleDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
  } = props;
  const setDateInputAnimations = () => {
    if (selectedSwitch === false)
      return {
        dateContainer: {
          animation: '$dateMoveIn',
          opactity: '1',
          width: '100%',
        },
        dateTimeContainer: {
          animation: '$dateMoveOut',
          opacity: '0',
          width: '0%',
        },
      };
    else
      return {
        dateContainer: {
          animation: '$dateMoveOut',
          opacity: '0',
          width: '0%',
        },
        dateTimeContainer: {
          animation: '$dateMoveIn',
          opactity: '1',
          width: '100%',
        },
      };
  };

  const classes = useStyles(setDateInputAnimations());

  return (
    <div className={classes.timeContainer}>
      <div className={classes.dateContainer}>
        <div className={classes.dateInputContainer}>
          <p>Date</p>
          <DateInput value={singleDate} setValue={setSingleDate} />
        </div>
      </div>
      <div className={classes.dateTimeContainer}>
        <div className={classes.dateInputContainer}>
          <p>Start Time</p>
          <input
            type="datetime-local"
            name="start-date"
            id="start-date"
            className={classes.dateInput}
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className={classes.dateInputContainer}>
          <p>End Time</p>
          <input
            type="datetime-local"
            name="end-date"
            id="end-date"
            className={classes.dateInput}
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

TimeContainer.propTypes = {
  selectedSwitch: PropTypes.bool,
  singleDate: PropTypes.string,
  setSingleDate: PropTypes.func,
  startDate: PropTypes.string,
  setStartDate: PropTypes.func,
  endDate: PropTypes.string,
  setEndDate: PropTypes.func,
};

export default TimeContainer;
