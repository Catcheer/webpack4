
const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports={
    entry:{
        index:'./src/index.js',
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].bundle.js',
        chunkFilename:'[name].bundle.js'
    },
     
    plugins:[
        new CleanWebpackPlugin(['dist']),// 删除dist目录
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new BundleAnalyzerPlugin()
    ]

}