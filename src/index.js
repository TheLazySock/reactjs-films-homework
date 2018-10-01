import React from 'react';
import { hydrate } from 'react-dom';

import App from './App';
import './style/index.scss';

hydrate(<App />, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept();
}