var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var entries           = require('./entries');
var UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var config = {
    entry: entries,
    output: {
        path: __dirname + '/..',
        filename: '[name]',
        libraryTarget: 'commonjs2'     // 被这个配置给毒到了
    },
    // 防止将公用文件重复打包，因此注释
    // resolve: {
    //     alias: {
    //         utils: path.join(__dirname + '../utils')
    //     }
    // },
    externals: /\/utils/i,
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract(['css-loader?minimize&-autoprefixer!postcss-loader', 'less-loader'])
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/      
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.ProgressPlugin(function handler(percentage, msg) {
            console.log('当前进度: ' + parseInt(percentage * 100) + "%", msg);
        }),
        new ExtractTextPlugin({
            filename: '[name]'
        }),
        new UglifyJsPlugin(),
        new CopyWebpackPlugin([{
            context: __dirname + '/../src/images/',
            from: '*',
            to: __dirname + '/../dist/images'
        }, {
            context: __dirname + '/../src/pages/',
            from: '**/*.json',
            to: __dirname + '/../dist/pages'
        }, {
            context: __dirname + '/../src/pages/',
            from: '**/*.wxml',
            to: __dirname + '/../dist/pages'
        }, {
            context: __dirname + '/../src/utils/',
            from: '*',
            to: __dirname + '/../dist/utils'
        }, {
            context: __dirname + '/../src/',
            from: '*',
            to: __dirname + '/../dist'
        }])
    ]
};

module.exports = config;