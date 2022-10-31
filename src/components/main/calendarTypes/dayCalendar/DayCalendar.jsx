import React from 'react';
import { useStyles } from './styles';

const DayCalendar = () => {
  const classes = useStyles();
  let renderedTimeBlocks = [];
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i}>
        <div className={classes.time}>{`${i}AM`}</div>
      </div>
    );
  }
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i}>
        <div className={classes.time}>{`${i}PM`}</div>
      </div>
    );
  }
  return <div className={classes.dayCalendar}>{renderedTimeBlocks}</div>;
};

export default DayCalendar;
