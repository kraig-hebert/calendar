import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

const ConfirmButton = (props) => {
  const { buttonTitle, onClick } = props.props;
  const classes = useStyles();

  return (
    <div className={classes.button} onClick={onClick}>
      <p>{buttonTitle}</p>
    </div>
  );
};

ConfirmButton.propTypes = {
  buttonTitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default ConfirmButton;
