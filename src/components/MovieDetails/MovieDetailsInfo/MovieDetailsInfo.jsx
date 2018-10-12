import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDetailsInfo.scss';

import Rating from './Rating';
import Genres from './Genres';

const MovieDetailsInfo = (props) => {
  const {
    title, genres, duration, rating,
  } = props;

  return (
    <div className={style.movieInfo}>
      <h2 className={style.movieInfoTitle}>{title.toUpperCase()}</h2>
      <div className={style.genresDurationBox}>
        <Genres genres={genres} />
        <span className={style.duration}>{duration}</span>
      </div>
      <Rating rating={rating} />
    </div>
  );
};

MovieDetailsInfo.defaultProps = {
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
};

MovieDetailsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetailsInfo;
