import React from 'react';
import PropTypes from 'prop-types';

import IntervalCreator from './intervalCreator/IntervalCreator';
import { useStyles } from './styles';
import { FaWindowClose } from 'react-icons/fa';

const IntertvalDrawer = (props) => {
  const { intervalOpen, setIntervalOpen } = props;

  const handleClose = () => setIntervalOpen(false);
  const handleClick = () => {
    setIntervalOpen(true);
  };

  const setDrawerAnimation = () => {
    if (intervalOpen) {
      return {
        width: '200px',
        height: '250px',
        animationName: '$revealDrawer',
      };
    } else {
      return {
        width: '50px',
        height: '100px',
        animationName: '$hideDrawer',
      };
    }
  };

  const setButtonAnimation = () => {
    if (!intervalOpen) {
      return {
        width: '30px',
        animationName: '$revealButton',
      };
    } else {
      return {
        width: '0px',
        animationName: '$hideButton',
      };
    }
  };

  const classes = useStyles({
    drawerProps: setDrawerAnimation(),
    buttonProps: setButtonAnimation(),
  });

  return (
    <div className={classes.drawerContainer}>
      <div className={classes.drawerContent}>
        {intervalOpen && (
          <FaWindowClose className={classes.icon} onClick={handleClose} />
        )}
        <div className={classes.button} onClick={handleClick}>
          <p>Create Interval</p>
        </div>
        <IntervalCreator intervalOpen={intervalOpen} />
      </div>
    </div>
  );
};

IntertvalDrawer.propTypes = {
  intervalOpen: PropTypes.bool,
  setIntervalOpen: PropTypes.func,
};

export default IntertvalDrawer;
