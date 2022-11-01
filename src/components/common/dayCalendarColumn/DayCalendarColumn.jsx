import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

const DayCalendarColumn = (props) => {
  const { width, displayTime, calendarWidth } = props;
  const classes = useStyles(props);
  let renderedTimeBlocks = new Array();

  // add midnight to column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={1}>
      <div className={classes.time}>mid</div>
    </div>
  );
  // add 1am-11am to column
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 1}>
        <div className={classes.time}>{`${i}am`}</div>
      </div>
    );
  }
  // add noon to the column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={13}>
      <div className={classes.time}>noon</div>
    </div>
  );
  // add 1pm through midnight to the column
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 13}>
        <div className={classes.time}>{`${i}pm`}</div>
      </div>
    );
  }
  return <div className={classes.dayCalendar}>{renderedTimeBlocks}</div>;
};

DayCalendarColumn.propTypes = {
  width: PropTypes.string,
  displayTime: PropTypes.bool,
  calendarWidth: PropTypes.string,
};

export default DayCalendarColumn;
