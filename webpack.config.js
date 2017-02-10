var webpack=require("webpack");
var path=require("path");

module.exports = {
  entry: [
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://127.0.0.1:8080",
    "./main.jsx"
  ],
  output: {
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};