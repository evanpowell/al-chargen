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
  },
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(png|jpe?g|gif|pdf)$/i,
  //         use: [
  //           {
  //             loader: 'file-loader',
  //           },
  //         ],
  //       },
  //     ],
  //   }
  // },
  chainWebpack: config => {
    config.module.rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/pdf/[name].[hash:8].[ext]'
      });
  }
}
