var path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/*-------*/
function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}
const htmlPlugins = generateHtmlPlugins('./src/html');
/*-------*/
module.exports = {
    mode: NODE_ENV,
    context: __dirname + '/src/js',//files directory
  	entry: {//entry points
      authorization: './authorization',
      newuser: './newuser',
      homePage: './homePage',
      changePassword: './changePassword',
      changeUsername: './changeUsername',
      usersSettings: './usersSettings',
      profile: './profile',
      common: './common',
      error: './error',
      logout: './logout'
    },
  	output: {//output file
  		path: path.resolve(__dirname, './build'),
    	//filename: '[name].[chunkhash].js',
      filename: '[name].js',
      publicPath: '/'
  	},
  	watch: NODE_ENV == 'development',//tracking changes
  	watchOptions: {
  		aggregateTimeout: 100
  	},
  	devtool: NODE_ENV == 'development' ? "source-map" : null,//map show
    devServer: {
      host: 'localhost',
      port: 3000,
  /*    proxy: [{
        path: /.backend/,
        target: 'http://localhost:3000'
      }],*/
      //contentBase: './src/backend',
      hot: true,
      open: true
    },
    resolve: {//directory and extension for modules
        modules: ["node_modules"],
        extensions: ["*", ".js"]
    }﻿,
    resolveLoader: {//directory and extension for loader-modules
        modules: ["node_modules"],
        moduleExtensions: ['-loader'],
        extensions: ["*", ".js"]
    },
    optimization: {//extracting common part from the output files
    minimize: false,//build compression
    runtimeChunk: { name: 'common'},
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /\.jsx?$/,
          chunks: 'all',
          minChunks: 2,
          name: 'common',
          enforce: true,
        },
      },
    },
  },﻿
    resolve: {
      alias: {
        Styles: path.resolve(__dirname, './src/styles/'),
        Data: path.resolve(__dirname, './src/data/')
      }
    }, 
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
   /*   new HtmlWebpackPlugin({
        template: './../index.html'
      }),*/
      new webpack.HotModuleReplacementPlugin()
    ].concat(htmlPlugins),
    module: {//babel connect
      rules: [{
          test: /\.js$/,
          include: __dirname + './src/js',
          exclude: /(node_modules)/,//do not transform additional modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
      },
      {
          test: /\.css$/,
          //include: __dirname + './styles',
          exclude: /(node_modules)/,//do not transform additional modules
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'}
          ]
      },
      {
          test: /\.scss$/,
          //include: __dirname + './styles',
          exclude: /(node_modules)/,//do not transform additional modules
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ]
      },
      {
          test: /\.html$/,
          exclude: /(node_modules)/,//do not transform additional modules
          include: path.resolve(__dirname, 'src/html'),
          //use: ['raw-loader']
          use: {
              loader: 'html-loader',
              options: {
              minimize: true,
              removeComments: true
              }
          }
      },
      /*      {
          test: /\.html$/,
          exclude: /(node_modules)/,//do not transform additional modules
          use: {
              loader: 'html-loader',
              options: {
              minimize: true,
              removeComments: true
              }
            }
      },*/
      {
          test: /\.(png|jpg|svg)$/,
          //include: __dirname + './images',
          exclude: /(node_modules)/,//do not transform additional modules
          use: {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
      },
      {
          test: /\.(json)$/,
          //include: __dirname + './data',
          exclude: /(node_modules)/,//do not transform additional modules
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          exclude: /(node_modules)/,//do not transform additional modules
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
      }]
    }
};