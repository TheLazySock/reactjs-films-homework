import React from 'react';
import PropTypes from 'prop-types';
import style from './Genres.scss';

const Genres = (props) => {
  const { genres } = props;
  const genresItems = genres.map(item => <li className={style.genresItem} key={item}>{item}</li>);

  return (
    <ul className={style.genres}>
      {genresItems}
    </ul>
  );
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Genres;
