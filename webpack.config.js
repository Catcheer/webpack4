
const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry:{
        app:'./src/index.js',
        print:'./src/print.js',
        another: './src/another-module.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].bundle.js'
    },
     optimization: {
           splitChunks: {
             chunks: 'all'
           }
         },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        })
    ]

}