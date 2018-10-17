import React from 'react';
import PropTypes from 'prop-types';
import style from './MoviesGrid.scss';

import MoviesGridItem from './MoviesGridItem';

const MoviesGrid = ({ moviesList }) => (
  <section className={style.moviesGridContainer}>
    {console.log(moviesList)}
    <ul className={style.moviesGrid}>
      {
        moviesList.map(movie => (
          <MoviesGridItem movie={movie} key={movie.id} />
        ))
      }
    </ul>
  </section>
);

MoviesGrid.propTypes = {
  moviesList: PropTypes.arrayOf(Object).isRequired,
};

export default MoviesGrid;
