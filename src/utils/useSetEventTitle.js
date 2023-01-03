import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useSetEventTitle = (props) => {
  const { title, length } = props;

  const [formattedEventTitle, setFormattedEventTitle] = useState();

  const setEventTitleLength = () => {
    const newTitle = title.slice(0, length).trim();
    if (newTitle === title) return newTitle;
    else return `${newTitle}...`;
  };

  useEffect(() => {
    setFormattedEventTitle(setEventTitleLength());
  }, [title]);

  return formattedEventTitle;
};

useSetEventTitle.propTypes = {
  title: PropTypes.string,
  length: PropTypes.number,
};

export default useSetEventTitle;
