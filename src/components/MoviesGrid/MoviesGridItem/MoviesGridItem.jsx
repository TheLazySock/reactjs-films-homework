import React from 'react';
import PropTypes from 'prop-types';
import style from './MoviesGridItem.scss';

import Genres from '../../Genres';
import Button from '../../Button';

const clicked = () => {
  console.log('123');
};

const MoviesGridItem = ({ movie }) => (
  <li className={style.item}>
    <img className={style.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
    <div className={style.hoverButtons}>
      <button type="button" className={style.watchNowBtn} onClick={clicked}>Watch Now</button>
      <Button title="View Info" buttonClass="viewInfoBtn" />
    </div>
    <div className={style.infoBlock}>
      <div className={style.titleRatingBlock}>
        <span className={style.title}>{movie.title.toUpperCase()}</span>
        <span className={style.rating}>{movie.vote_average}</span>
      </div>
      <div className={style.genres}>
        <Genres genres={movie.genre_ids} />
      </div>
    </div>
  </li>
);

MoviesGridItem.propTypes = {
  movie: PropTypes.objectOf(Object).isRequired,
};

export default MoviesGridItem;
