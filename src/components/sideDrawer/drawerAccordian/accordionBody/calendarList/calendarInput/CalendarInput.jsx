import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CalendarInput = (props) => {
  const { title, styles } = props;
  const [checked, setChecked] = useState(true);
  return (
    <div className={styles}>
      <input
        type="checkbox"
        id={title}
        name={title}
        value={title}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor={title}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </label>
    </div>
  );
};
CalendarInput.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.string,
};
export default CalendarInput;
