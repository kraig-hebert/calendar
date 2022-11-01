import React from 'react';
import { useStyles } from './styles';

const DayCalendar = () => {
  const classes = useStyles();
  let renderedTimeBlocks = [];
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={1}>
      <div className={classes.time}>mid</div>
    </div>
  );

  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 1}>
        <div className={classes.time}>{`${i}am`}</div>
      </div>
    );
  }
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={13}>
      <div className={classes.time}>noon</div>
    </div>
  );
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 13}>
        <div className={classes.time}>{`${i}pm`}</div>
      </div>
    );
  }
  return <div className={classes.dayCalendar}>{renderedTimeBlocks}</div>;
};

export default DayCalendar;
