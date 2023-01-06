import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const CheckBox = (props) => {
  const { checkBoxBackgroundColor, checkColor, onClick } = props;
  const classes = useStyles({
    checkBoxBackgroundColor: checkBoxBackgroundColor,
    checkColor: checkColor,
  });
  return <span className={classes.checkBox} onClick={onClick}></span>;
};

CheckBox.propTypes = {
  checkBoxBackgroundColor: PropTypes.string,
  checkColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default CheckBox;
