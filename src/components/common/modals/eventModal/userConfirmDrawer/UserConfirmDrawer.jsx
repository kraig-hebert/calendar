import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

import { useStyles } from './styles';

const UserConfirmDrawer = (props) => {
  const { userConfirmOpen, setUserConfirmOpen, confirmValue } = props;

  const setDrawerAnimation = () => {
    if (userConfirmOpen) {
      return {
        height: '125px',
        animationName: '$revealDrawer',
      };
    } else {
      return {
        height: '0',
        animationName: '$hideDrawer',
      };
    }
  };

  const classes = useStyles(setDrawerAnimation());

  const handleClose = () => setUserConfirmOpen(false);
  return (
    <div className={classes.drawerContainer}>
      <div className={classes.drawerContent}>
        Confirm
        <FaWindowClose className={classes.icon} onClick={handleClose} />
      </div>
    </div>
  );
};

UserConfirmDrawer.propTypes = {
  userConfirmOpen: PropTypes.bool,
  setUserConfirmOpen: PropTypes.func,
  confirmValue: PropTypes.string,
};

export default UserConfirmDrawer;
