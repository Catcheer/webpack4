const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
  mode: 'production',

  module:{
    rules:[
      {
        test:/\.css$/gi,
        use:[MiniCssExtractPlugin.loader,'css-loader']
    },
    {
        test:/\.(scss)$/gi,
        use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
    }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ]
});