import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const CheckBox = (props) => {
  const { checkBoxBackgroundColor, checkColor, startChecked } = props;
  const [checked, setChecked] = useState(startChecked);
  const setStyles = () => {
    if (checked) {
      return {
        checkBoxBackgroundColor: checkBoxBackgroundColor,
        checkColor: checkColor,
      };
    } else {
      return {
        checkBoxBackgroundColor: 'rgb(225, 226, 227)',
        checkColor: 'rgb(225, 226, 227)',
      };
    }
  };
  const classes = useStyles(setStyles());

  const handleClick = (e) => {
    setChecked((prev) => !prev);
  };

  return <span className={classes.checkBox} onClick={handleClick}></span>;
};

CheckBox.propTypes = {
  checkBoxBackgroundColor: PropTypes.string,
  checkColor: PropTypes.string,
  startChecked: PropTypes.bool,
};
export default CheckBox;
