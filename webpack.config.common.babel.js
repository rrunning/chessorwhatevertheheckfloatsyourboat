import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = new WebpackConfig().merge({
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  context:  path.join(__dirname,'/app'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      }
    ],
    loaders: [{
        test: /\.js$/,
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'Starter Theme',
      template: 'index.html',
      inject: 'body'
  }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  }
})
