import React from 'react';
import PropTypes from 'prop-types';
import style from './MovieDetailsInfo.scss';

import Rating from './Rating';

const MovieDetailsInfo = (props) => {
  const {
    title, genres, duration, rating,
  } = props;
  const genresItems = genres.map(item => <li className={style.genresItem} key={item}>{item}</li>);

  return (
    <div className={style.movieInfo}>
      <h2 className={style.movieInfoTitle}>{title.toUpperCase()}</h2>
      <div className={style.genresDurationBox}>
        <ul className={style.genres}>
          {genresItems}
        </ul>
        <span className={style.duration}>{duration}</span>
      </div>
      <Rating rating={rating} />
    </div>
  );
};

MovieDetailsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetailsInfo;
