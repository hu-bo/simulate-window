var webpack = require('webpack');
var path = require('path');

// variables
var isProduction = process.argv.indexOf('-p') >= 0;
var sourcePath = path.join(__dirname, './lib');
var outPath = path.join(__dirname, './dist');
console.log(process.env.NODE_ENV)
// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: sourcePath,
  entry: {
    main: './main.ts'
  },
  output: {
    publicPath: './',
    path: outPath,
    filename: 'simulate-window.js',
    library: "SimulateWindow", // string,
    // 导出库(exported library)的名称
    libraryTarget: "umd", // 通用模块定义
    // 导出库(exported library)的类型
  },
  // devtool: 'source-map',
  target: 'web',
  resolve: {
    alias: {
      // 模块别名列表
      "@": './assets'
    },
    extensions: ['.js', '.ts'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
  },
  module: {
    loaders: [
      // .ts, .tsx
      {
        test: /\.(ts)?$/,
        use: isProduction
          ? 'awesome-typescript-loader?module=es6'
          : [
            'awesome-typescript-loader?module=es6'
          ]
      },
      // css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.png$/, use: 'url-loader?limit=10000' },
      { test: /\.jpg$/, use: 'file-loader' },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: sourcePath,
        postcss: [
          require('postcss-import')({ addDependencyTo: webpack }),
          require('postcss-url')(),
          require('postcss-cssnext')(),
          require('postcss-reporter')(),
          require('postcss-browser-reporter')({ disabled: isProduction }),
        ]
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.bundle.js',
    //   minChunks: Infinity
    // }),
   //  new webpack.optimize.AggressiveMergingPlugin(),
    // new ExtractTextPlugin({
    //   filename: 'styles.css',
    //   disable: !isProduction
    // }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: false
    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    stats: {
      warnings: false
    },
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};
