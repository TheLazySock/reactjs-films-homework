const developmentConfig = require('./webpack.development.js');
const productionConfig = require('./webpack.production.js');

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig;
  }
  return developmentConfig;
};
