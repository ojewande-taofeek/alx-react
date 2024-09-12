const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    
   entry: {
      main: path.resolve(__dirname, '../src/index.js'),
   }, 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            'file-loader',
            {
            loader: 'image-webpack-loader',
            options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
            },
            },
        ],
        }
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'), 
    },
     hot: true,
     devMiddleware: {
      writeToDisk: true,
     },
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
};
