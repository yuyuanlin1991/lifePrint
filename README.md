#构建项目的流程记录
step 1 新建一个项目文件夹，到文件夹下运行npm init
step 2 npm insatall express -s
step 3 配置基本的express 选项，使其可以返回相应的页面
step 4 npm install babel-core balel-loader babel-preset-es2015
step 5 npm install --save-dev webpack@3 webpack-dev-server

#运行服务
node app.js

#在项目中加入webpack实现自动化
step1 安装webpack,npm install webpack -save -dev

step2 写配置文件

      配置文件包含几个部分：
      1）引入需要使用的依赖或者插件，如下
      const webpack = require('webpack');
      const path = require('path');
      //引入要使用的插件。这些插件需要用npm install来安装
      const HtmlWebpackPlugin = require('html-webpack-plugin');  //创建html文档的插件HtmlWebpackPlugin能自动把打包的js引入到床架的html
      const ExtractTextPlugin = require('extract-text-webpack-plugin'); //将css独立打包成文件，不融为js的一部分
      var CopyWebpackPlugin = require('copy-webpack-plugin');    //复制的插件
      var CleanWebpackPlugin = require('clean-webpack-plugin');  //清空的插件
      var SpritesmithPlugin = require('webpack-spritesmith');    //雪碧图的插件

      2）可以配置环境变量（生产、发布），根据需要来确定，大型项目都要

      3）webpack配置内容，包含--入口（entry即启动页，可以有多个）、devtool（依赖工具比如sourcemap）、
         module（处理各类文件的规则）、plugins（插件的使用）

      4) webpack设置监听，监听前端代码的变化并自动编译（webpack --watch命令就可实现)，可以在package.json中的scripts中加入命名可简化开启的命令

      5）加入框架，将框架映入到项目中，这里采用的是vue
        安装vue-loader 和vue 框架以及其他的相关依赖，并在webpack中配置处理.vue文件需要用vue-loader

      6)添加sourcemap,便于在调试时查找源码；
