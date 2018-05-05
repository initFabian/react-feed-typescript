const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [{
        enforce: 'pre',
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  }
}
