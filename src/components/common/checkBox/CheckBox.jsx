import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { filterChecked, filterUnchecked } from '../../../reducers/appSettings';
import { useStyles } from './styles';

const CheckBox = (props) => {
  const { checkBoxBackgroundColor, checkColor, startChecked, title } = props;
  const [checked, setChecked] = useState(startChecked);
  const dispatch = useDispatch();
  const ref = useRef(0);

  const setStyles = () => {
    if (checked)
      return {
        checkBoxBackgroundColor: checkBoxBackgroundColor,
        checkColor: checkColor,
      };
    else
      return {
        checkBoxBackgroundColor: 'rgb(225, 226, 227)',
        checkColor: 'rgb(225, 226, 227)',
      };
  };
  const classes = useStyles(setStyles());

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    if (ref.current !== 0) {
      if (checked) dispatch(filterChecked(title));
      else dispatch(filterUnchecked(title));
    } else ref.current = 1;
  }, [checked]);

  return <span className={classes.checkBox} onClick={handleClick}></span>;
};

CheckBox.propTypes = {
  checkBoxBackgroundColor: PropTypes.string,
  checkColor: PropTypes.string,
  startChecked: PropTypes.bool,
  title: PropTypes.string,
};
export default CheckBox;
