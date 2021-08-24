//SO solution to an error thrown due to contentBase:
// https://stackoverflow.com/questions/67926476/webpack-dev-server-config-contentbase-not-working-in-latest-version

// module.exports = {
//   // 1
//   entry: './src/index.js',
//   // 2
//   output: {
//     path: '/dist',
//     filename: 'bundle.js'
//   },
//   // 3
//   devServer: {
//     contentBase: './dist'
//   }
// };

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};