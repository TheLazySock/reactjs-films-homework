import React from 'react';
import style from './MovieDetails.scss';

import MovieDetailsInfo from './MovieDetailsInfo';
import MovieDetailsActions from './MovieDetailsActions';

const MovieDetails = () => (
  <section className={style.movieDetailsContainer}>
    <MovieDetailsInfo
      title="The jungle book"
      duration="1h 46m"
      rating={4.8}
    />
    <MovieDetailsActions
      info="There are growing dangers in the wozarding world of 1926 New York. Something musterious is leaving a path of destruction in the streets, threating to expose the wizarding"
    />
  </section>
);

export default MovieDetails;
