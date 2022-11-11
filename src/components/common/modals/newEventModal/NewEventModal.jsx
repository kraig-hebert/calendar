import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectNewEventModalOpen,
  closeEventModalClicked,
} from '../../../../reducers/appSettings';
import { useStyles } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';

const NewEventModal = () => {
  const dispatch = useDispatch();
  const newEventModalOpen = useSelector(selectNewEventModalOpen);
  const setStyles = () => {
    if (newEventModalOpen)
      return {
        display: 'flex',
        animation: '$fadeIn',
        zIndex: '2',
        opactity: '1',
      };
    else
      return {
        display: 'none',
        animation: '$fadeOut',
        zIndex: '-1',
        opacity: '0',
      };
  };

  const classes = useStyles(setStyles());
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.iconContainer}>
          <AiFillCloseCircle
            className={classes.closeIcon}
            onClick={(e) => dispatch(closeEventModalClicked())}
          />
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;
