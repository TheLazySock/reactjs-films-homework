const developmentConfig = require('./config/webpack/webpack.development.js');
const productionConfig = require('./config/webpack/webpack.production.js');

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig;
  }
  return developmentConfig;
};
