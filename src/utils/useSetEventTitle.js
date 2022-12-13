import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useSetEventTitle = (props) => {
  const { title } = props;
  console.log(title);

  const [formattedEventTitle, setFormattedEventTitle] = useState();

  const setEventTitleLength = () => {
    const newTitle = title.slice(0, 12).trim();
    if (newTitle === title) return newTitle;
    else return `${newTitle}...`;
  };

  useEffect(() => {
    setFormattedEventTitle(setEventTitleLength());
  }, []);

  return formattedEventTitle;
};

useSetEventTitle.propTypes = {
  title: PropTypes.string,
};

export default useSetEventTitle;
