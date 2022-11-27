import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const SwitchSelectors = (props) => {
  const { selectedSwitch, setSelectedSwitch } = props;
  const classes = useStyles();
  return (
    <div className={classes.switchContainer}>
      <p>All Day Event</p>
      <label htmlFor="all-day">
        <input
          type="checkbox"
          name="all-day"
          id="all-day"
          checked={selectedSwitch === true && true}
          onChange={(e) => setSelectedSwitch((prev) => !prev)}
        />
        <span className={classes.slider}></span>
      </label>
      <p>Timed Event</p>
    </div>
  );
};

SwitchSelectors.propTypes = {
  selectedSwitch: PropTypes.string,
  setSelectedSwitch: PropTypes.func,
};

export default SwitchSelectors;
