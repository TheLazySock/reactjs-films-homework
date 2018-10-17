import React from 'react';

import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import Footer from './components/Footer/Footer';
import style from './style/App.scss';


const App = () => (
  <div className={style.mainContainer}>
    <Header />
    <MovieDetails />
    <MoviesList />
    <Footer />
  </div>
);

export default App;
