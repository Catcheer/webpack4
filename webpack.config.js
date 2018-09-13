
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240000
                    }
                }],

            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),// 删除dist目录
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Output Management'
        }),
        // new BundleAnalyzerPlugin()
    ]

}