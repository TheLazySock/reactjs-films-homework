const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const developmentConfig = require('./config/webpack/webpack.development');


const app = express();


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/build/index.html`));
  });
} else {
  const config = developmentConfig;
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.listen(3000, () => {
  console.log('App listening on port 3000!\n');
});
