var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './example/basic.jsx',
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.jsx$|\.es6$|\.js$/, loaders: ['babel-loader?stage=0'], exclude: /node_modules/ },
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: "eval-source-map"
};
