var path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
module.exports = {
    mode: NODE_ENV,
    context: __dirname + '/src/js',//files directory
  	entry: {//entry points
      list_hide: './list_hide',
      gallery: './gallery',
      common: './common',
      mobile_menu: './mobile-menu_hide',
      slider: './slider'
    },
  	output: {//output file
  		path: path.resolve(__dirname, './build'),
    	//filename: '[name].[chunkhash].js',
      filename: '[name].js',
    	library: '[name]'
  	},
  	watch: NODE_ENV == 'development',//tracking changes
  	watchOptions: {
  		aggregateTimeout: 100
  	},
  	devtool: NODE_ENV == 'development' ? "source-map" : null,//map show
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
        ScriptFolder: path.resolve(__dirname, './src/js/')
      }
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {//babel connect
      rules: [{
          test: /\.m?js$/,
          include: __dirname + './src/js',
          exclude: /(node_modules|bower_components)/,//do not transform additional modules
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
          test: /\.(png|jpg|svg|ttf)$/,
          //include: __dirname + './images',
          exclude: /(node_modules)/,//do not transform additional modules
          use: {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
      }]
    }
};