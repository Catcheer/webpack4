
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        // print:'./src/print.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath:'/public/'
    },
    // module: {
        // rules: [
            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             attrs: [':src'],
            //             minimize: true
            //         }
            //     }
            // },
            // {
            //     test: /\.(ejs)$/,
            //     use: [
            //         {
            //             loader: 'ejs-loader',
            //         }
            //     ]
            // },
            // {
            //     test: /\.(css|scss|less)$/i,
            //     use: ['style-loader', 'css-loader'],
            // },
            // {
            //     test: /\.(png|jpg|gif|svg)$/i,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10240000
            //         }
            //     }],

            // }

        // ]
    // }
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        // publicPath:'/public/'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),// 删除dist目录
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Output Management',
            // chunks:['app']
        }),
        // new BundleAnalyzerPlugin()
    ]

}