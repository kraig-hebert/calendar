import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

import { useStyles } from './styles';

const UserAlertDrawer = (props) => {
  const { userAlertOpen, setUserAlertOpen, alertList } = props;

  const setDrawerAnimation = () => {
    if (userAlertOpen) {
      return {
        height: '75px',
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

  const renderedAlertList = alertList.map((alert, index) => (
    <div key={index} className={classes.alert}>
      {alert}
    </div>
  ));

  const handleClose = () => setUserAlertOpen(false);
  return (
    <div className={classes.drawerContainer}>
      <div className={classes.drawerContent}>
        <FaWindowClose className={classes.icon} onClick={handleClose} />
        <div className={classes.alertsContainer}>{renderedAlertList}</div>
      </div>
    </div>
  );
};

UserAlertDrawer.propTypes = {
  userAlertOpen: PropTypes.bool,
  setUserAlertOpen: PropTypes.func,
  alertList: PropTypes.array,
};

export default UserAlertDrawer;
