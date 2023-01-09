import React, { useEffect } from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const SwitchSelectors = (props) => {
  const { selectedSwitch, setSelectedSwitch, selectedCalendar } = props;
  const theme = useTheme();

  const setStyles = () => {
    if (selectedCalendar !== 'Holidays')
      return {
        backgroundColor: theme.primary.main,
      };
    else return { backgroundColor: 'none' };
  };
  const classes = useStyles(setStyles());

  const handleSwitchChange = () => {
    if (selectedCalendar !== 'Holidays') setSelectedSwitch((prev) => !prev);
  };

  useEffect(() => {
    if (selectedCalendar === 'Holidays') setSelectedSwitch(false);
  }, [selectedCalendar, setSelectedSwitch]);

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
          onChange={handleSwitchChange}
        />
        <span className={classes.activeSlider}></span>
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
  selectedCalendar: PropTypes.string,
};

export default SwitchSelectors;
