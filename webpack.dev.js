


const path = require('path');
const port = 3000

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const WebpackBrowserPluginConfig = new WebpackBrowserPlugin({
  port: port,
  url: 'http://localhost'
  // host: '0.0.0.0'
});
module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },{
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },{
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
          
        ]
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(jpe?g|png|gif|svg)$/i, use: ['url-loader?limit=10000','img-loader']}
    ]
  },
  // externals: {
  //   'Config': JSON.stringify(require('./config/config.json'))
  // },
  plugins: [HtmlWebpackPluginConfig, WebpackBrowserPluginConfig],
  // devtool: '#source-map',
  devtool: 'inline-source-map',
  devServer: {
  	port: port,
    historyApiFallback: true,
    inline: true
  }
}