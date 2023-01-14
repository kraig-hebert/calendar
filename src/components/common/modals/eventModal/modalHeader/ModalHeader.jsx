import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { SlClose } from 'react-icons/sl';
import { FaRegSave, FaRegWindowClose } from 'react-icons/fa';

import { selectEventModalOpen } from '../../../../../reducers/appSettings';
import { useStyles } from './styles';

const ModalHeader = (props) => {
  const {
    inputValue,
    setInputValue,
    handleSaveClick,
    handleDeleteClick,
    clearModal,
    titleRef,
  } = props;
  const classes = useStyles();
  const eventModalOpen = useSelector(selectEventModalOpen);

  const checkDelete = () =>
    eventModalOpen === 'edit' ? classes.iconActive : classes.iconDisabled;

  return (
    <div className={classes.modalHeader}>
      <div className={classes.iconContainer}>
        <FaRegSave className={classes.iconActive} onClick={handleSaveClick} />
        <BsTrashFill className={checkDelete()} onClick={handleDeleteClick} />
      </div>
      <div className={classes.titleInputContainer}>
        <input
          type="text"
          name="title"
          id="title"
          value={inputValue}
          className={classes.titleInput}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          ref={titleRef}
        />
        {!inputValue && (
          <span className={classes.placeholder}>Enter Title..</span>
        )}
      </div>
      <div className={classes.iconContainer}>
        <FaRegWindowClose className={classes.iconActive} onClick={clearModal} />
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  handleSaveClick: PropTypes.func,
  handleDelete: PropTypes.func,
  clearModal: PropTypes.func,
  titleRef: PropTypes.object,
};

export default ModalHeader;
