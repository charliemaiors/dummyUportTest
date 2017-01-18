'use strict';

// Webpack
const webpack = require('webpack')

// Plugin Setup
const globalsPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  'process.env': { 'NODE_ENV': JSON.stringify('development') }
})

let libraryName = 'uportlib'
let outputFile = libraryName + '.js'

// Final Config
module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    sourceMapFilename: outputFile
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    modules: [ './src', 'node_modules' ],
    extensions: ['.js', '.json']
  },
  plugins: [
    globalsPlugin,
    new webpack.SourceMapDevToolPlugin({
      filename: outputFile + '.map',
      append: false,
      module: true,
      columns: true,
      lineToLine: true
    })

  ]
}