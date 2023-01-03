import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useSetEventTitle = (props) => {
  const { title } = props;

  const [formattedEventTitle, setFormattedEventTitle] = useState();

  const setEventTitleLength = () => {
    const newTitle = title.slice(0, 9).trim();
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
};

export default useSetEventTitle;
