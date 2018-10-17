import React from 'react';
import style from './MoviesList.scss';

import MoviesGrid from '../MoviesGrid';

class MoviesList extends React.Component {
  state = {
    moviesList: [],
  }

  componentWillMount() {
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=f9959117aca0c27f239b6bfcf83ed37f')
      .then(res => res.json())
      .then((data) => {
        // this.state.moviesList = data.results;
        this.setState({
          moviesList: data.results,
        });
        console.log(this.state.moviesList);
        return data;
      });
  }

  render() {
    const { moviesList } = this.state;
    return (
      <section className={style.moviesList}>
        <MoviesGrid moviesList={moviesList} />
      </section>
    );
  }
}

export default MoviesList;
