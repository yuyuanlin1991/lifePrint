const webpack = require('webpack');
const path = require('path');
//引入要使用的插件。这些插件需要用npm install来安装
const HtmlWebpackPlugin = require('html-webpack-plugin');  //创建html文档的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //将css文件提取
var CopyWebpackPlugin = require('copy-webpack-plugin');    //复制的插件
var CleanWebpackPlugin = require('clean-webpack-plugin');  //清空的插件
var SpritesmithPlugin = require('webpack-spritesmith');    //雪碧图的插件

const DEBUG = process.env.NODE_ENV == 'production';        //设置环境变量（生产还是发布）

var webpackConfig = {
    devtool: 'inline-source-map',
    entry: {
        page: __dirname +"/src/js/main.js", //入口文件通常是作为启动页
    },
    output: {
        path: __dirname + "/bin/public",
        filename: "js/[id].bundle.js",
        sourceMapFilename: 'js/maps/[id].map',
        chunkFilename: '[id].js?[chunkhash]'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"],
                }),
                exclude: /node_modules/,
            },
            {
                test:/\.json$/,
                loader:'json-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.vue','.css','.scss','.html'],    //告诉webpack哪些类型的文件是需要加载的
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
    },
    plugins: [
        new CleanWebpackPlugin(['./bin/public/js/*','./bin/public/vender/*']),
        new HtmlWebpackPlugin({
            template: './src/vender/index.html', //构建html模板,这里其实可以传参到html中（ejs类似的模板）
            filename:'vender/index.html',    //
            inject: 'body',
            chunks: ['page'],
        }),
        new ExtractTextPlugin("[name].css")
    ]
};

module.exports = webpackConfig;