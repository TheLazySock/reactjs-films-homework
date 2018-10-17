import React from 'react';
import PropTypes from 'prop-types';
import style from './Genres.scss';

const Genres = ({ genres }) => (
  <ul className={style.genres}>
    {genres.map(item => <li className={style.genresItem} key={item}>{item}</li>)}
  </ul>
);

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Genres;
