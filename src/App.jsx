import React from 'react';

import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer/Footer';
import style from './style/App.scss';


const App = () => (
  <div className={style.mainContainer}>
    <Header />
    <MovieDetails />
    <Footer />
  </div>
);

export default App;
