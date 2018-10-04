const developmentConfig = require('./webpack.development.js');
const productionConfig = require('./webpack.production.js');

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return productionConfig;
  }
  return developmentConfig;
};
