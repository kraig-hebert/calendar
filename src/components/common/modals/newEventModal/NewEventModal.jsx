import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNewEventModalOpen } from '../../../../reducers/appSettings';
import { useStyles } from './styles';

const NewEventModal = () => {
  const newEventModalOpen = useSelector(selectNewEventModalOpen);
  const setStyles = () => {
    if (newEventModalOpen) return 'flex';
    else return 'none';
  };

  const classes = useStyles({ display: setStyles() });
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>NewEventModal</div>
    </div>
  );
};

export default NewEventModal;
