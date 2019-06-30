const configureAPI = require('./server/api-config');

module.exports = {
  devServer: {
    before: configureAPI
  }
}