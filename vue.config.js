const path = require('path');
const configureAPI = require('./server/api-config');

module.exports = {
  devServer: {
    before: configureAPI
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/import.scss')]
    }
  }
}
