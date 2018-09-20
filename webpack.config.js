
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        // publicPath:'/public/'
    },
    mode: "production",
    module: {
        rules: [
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
            {
                test: /\.(css|scss|less)$/i,
                use: ['style-loader', 'css-loader',"sass-loader"],
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/i,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10240000
            //         }
            //     }],

            // }

        ]
    },
    // devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port:9000,
        hot:true,
        // compress:true,
        clientLogLevel:'none',
        publicPath:'/public/',
        noInfo: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\/a$/, to: '/public/index.html' }
              ]
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),// 删除dist目录
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Hot Module Replacement',
            // chunks:['app']
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        // new BundleAnalyzerPlugin()
    ]

}