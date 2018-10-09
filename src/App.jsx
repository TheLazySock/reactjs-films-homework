import React from 'react';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import style from './style/App.scss';


const App = () => (
  <div className={style.mainContainer}>
    <Header />
    {/* <Footer /> */}
  </div>
);

export default App;
