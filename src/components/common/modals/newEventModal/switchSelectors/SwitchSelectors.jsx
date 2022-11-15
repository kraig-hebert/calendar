import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const SwitchSelectors = (props) => {
  const { selectedSwitch, setSelectedSwitch } = props;
  const classes = useStyles();
  return (
    <div className={classes.switchSelectorsContainer}>
      <div className={classes.switchContainer}>
        <p>All Day Event</p>
        <label htmlFor="all-day">
          <input
            type="checkbox"
            name="all-day"
            id="all-day"
            checked={selectedSwitch === 'all-day' && true}
            onChange={(e) => setSelectedSwitch('all-day')}
          />
          <span className={classes.slider}></span>
        </label>
      </div>
      <div className={classes.switchContainer}>
        <p>Timed Event</p>
        <label htmlFor="timed">
          <input
            type="checkbox"
            name="timed"
            id="timed"
            checked={selectedSwitch === 'timed' && true}
            onChange={(e) => setSelectedSwitch('timed')}
          />
          <span className={classes.slider}></span>
        </label>
      </div>
    </div>
  );
};

SwitchSelectors.propTypes = {
  selectedSwitch: PropTypes.string,
  setSelectedSwitch: PropTypes.func,
};

export default SwitchSelectors;
