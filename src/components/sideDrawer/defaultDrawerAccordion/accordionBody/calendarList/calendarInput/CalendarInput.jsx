import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CalendarInput = (props) => {
  const { title, classes } = props;
  const [checked, setChecked] = useState(true);
  return (
    <div className={classes.inputContainer}>
      <input
        type="checkbox"
        id={title}
        name={title}
        value={title}
        checked={checked}
        className={classes.checkBox}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className={classes.label}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </span>
    </div>
  );
};
CalendarInput.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.object,
};
export default CalendarInput;
