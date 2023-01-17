import React from 'react';
import PropTypes from 'prop-types';
import { MdConstruction } from 'react-icons/md';

import { useStyles } from './styles';

const IntervalCreator = (props) => {
  const { intervalOpen } = props;

  const setCreatorAnimation = () => {
    if (intervalOpen) {
      return {
        width: '100%',
        animationName: '$revealIntervalCreator',
      };
    } else {
      return {
        width: '0',
        animationName: '$hideIntervalCreator',
      };
    }
  };

  const classes = useStyles(setCreatorAnimation());
  return (
    <div className={classes.intervalContainer}>
      <div className={classes.content}>
        Coming Soon
        <MdConstruction className={classes.icon} />
      </div>
    </div>
  );
};

IntervalCreator.propTypes = {
  intervalOpen: PropTypes.bool,
};

export default IntervalCreator;
