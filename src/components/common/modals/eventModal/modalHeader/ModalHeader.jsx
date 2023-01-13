import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsTrashFill, BsSaveFill } from 'react-icons/bs';
import { FaRegSave } from 'react-icons/fa';

import { selectEventModalOpen } from '../../../../../reducers/appSettings';
import { useStyles } from './styles';

const ModalHeader = (props) => {
  const {
    inputValue,
    setInputValue,
    savingAllowed,
    handleSave,
    handleDelete,
    clearModal,
    titleRef,
  } = props;
  const classes = useStyles();
  const eventModalOpen = useSelector(selectEventModalOpen);

  const checkSavingAllowed = () =>
    savingAllowed ? classes.iconActive : classes.iconDisabled;
  const checkDelete = () =>
    eventModalOpen === 'edit' ? classes.iconActive : classes.iconDisabled;

  return (
    <div className={classes.modalHeader}>
      <div className={classes.iconContainer}>
        <FaRegSave className={checkSavingAllowed()} onClick={handleSave} />
        <BsTrashFill className={checkDelete()} onClick={handleDelete} />
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
        <AiFillCloseCircle
          className={classes.iconActive}
          onClick={clearModal}
        />
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  savingAllowed: PropTypes.bool,
  handleSave: PropTypes.func,
  handleDelete: PropTypes.func,
  clearModal: PropTypes.func,
  titleRef: PropTypes.object,
};

export default ModalHeader;
