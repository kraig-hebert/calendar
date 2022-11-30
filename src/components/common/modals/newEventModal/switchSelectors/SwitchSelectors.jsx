import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const SwitchSelectors = (props) => {
  const { selectedSwitch, setSelectedSwitch } = props;
  const classes = useStyles();
  return (
    <div className={classes.switchContainer}>
      <p
        className={
          !selectedSwitch ? classes.activeEventType : classes.inActiveEventType
        }
      >
        All Day Event
      </p>
      <label htmlFor="all-day">
        <input
          type="checkbox"
          name="all-day"
          id="all-day"
          checked={selectedSwitch}
          onChange={(e) => setSelectedSwitch((prev) => !prev)}
        />
        <span className={classes.slider}></span>
      </label>
      <p
        className={
          selectedSwitch ? classes.activeEventType : classes.inActiveEventType
        }
      >
        Timed Event
      </p>
    </div>
  );
};

SwitchSelectors.propTypes = {
  selectedSwitch: PropTypes.bool,
  setSelectedSwitch: PropTypes.func,
};

export default SwitchSelectors;
