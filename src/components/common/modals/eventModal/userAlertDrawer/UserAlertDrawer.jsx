import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { FaWindowClose } from 'react-icons/fa';

import { useStyles } from './styles';

const UserAlertDrawer = (props) => {
  const { userAlertOpen, setUserAlertOpen } = props;
  const theme = useTheme();

  const setDrawerAnimation = () => {
    if (userAlertOpen) {
      return {
        width: '200px',
        animationName: '$revealDrawer',
        border: `1px solid ${theme.primary.main}`,
      };
    } else {
      return {
        width: '0',
        animationName: '$hideDrawer',
        border: 'none',
      };
    }
  };

  const classes = useStyles(setDrawerAnimation());

  const handleClose = () => setUserAlertOpen(false);
  return (
    <div className={classes.drawerContainer}>
      <div className={classes.drawerContent}>
        <FaWindowClose className={classes.icon} onClick={handleClose} />
      </div>
    </div>
  );
};

UserAlertDrawer.propTypes = {
  userAlertOpen: PropTypes.bool,
  setUserAlertOpen: PropTypes.func,
};

export default UserAlertDrawer;
