import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { FaWindowClose } from 'react-icons/fa';

const IntertvalDrawer = (props) => {
  const { intervalOpen, setIntervalOpen } = props;

  const setDrawerAnimation = () => {
    if (intervalOpen) {
      return {
        width: '200px',
        animationName: '$revealDrawer',
      };
    } else {
      return {
        width: '0',
        animationName: '$hideDrawer',
      };
    }
  };

  const classes = useStyles(setDrawerAnimation());
  const handleClose = () => setIntervalOpen(false);

  return (
    <div className={classes.drawerContainer}>
      <div className={classes.drawerContent}>
        <FaWindowClose className={classes.icon} onClick={handleClose} />
      </div>
    </div>
  );
};

IntertvalDrawer.propTypes = {
  intervalOpen: PropTypes.bool,
  setIntervalOpen: PropTypes.func,
};

export default IntertvalDrawer;
