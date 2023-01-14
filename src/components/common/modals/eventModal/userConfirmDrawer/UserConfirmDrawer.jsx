import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

import { useStyles } from './styles';
import ConfirmButton from './confirmButton/ConfirmButton';

const UserConfirmDrawer = (props) => {
  const {
    userConfirmOpen,
    setUserConfirmOpen,
    confirmValue,
    handleSave,
    handleDelete,
  } = props;

  const setDrawerAnimation = () => {
    if (userConfirmOpen) {
      return {
        height: '50px',
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
  const setButtonProps = () => {
    if (confirmValue === 'save')
      return { buttonTitle: 'Confirm Save', onClick: handleSave };
    else if (confirmValue === 'delete')
      return { buttonTitle: 'Confirm Delete', onClick: handleDelete };
    else return { buttonTitle: '', onClick: () => {} };
  };

  const handleClose = () => setUserConfirmOpen(false);
  return (
    <div className={classes.drawerContainer}>
      <div className={classes.drawerContent}>
        <ConfirmButton props={setButtonProps()} />
        <FaWindowClose className={classes.icon} onClick={handleClose} />
      </div>
    </div>
  );
};

UserConfirmDrawer.propTypes = {
  userConfirmOpen: PropTypes.bool,
  setUserConfirmOpen: PropTypes.func,
  confirmValue: PropTypes.string,
  handleSave: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default UserConfirmDrawer;
