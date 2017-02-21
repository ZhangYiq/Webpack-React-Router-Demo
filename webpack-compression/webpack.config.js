var ETP = require("extract-text-webpack-plugin");
const webpack=require("webpack");
module.exports = {
  entry: {
      app:'./index.js',
      vendors:['react','react-dom']
  },
  devtool: false,

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
     // {test:/\.css$/,loader:'style-loader!css-loader' }
      {test:/\.css$/,loader:ETP.extract("style-loader","css-loader")}
    ]
  },
  plugins:[
       new ETP("style.css"),//Extract to style.css file
       new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
       new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
  ]
}
