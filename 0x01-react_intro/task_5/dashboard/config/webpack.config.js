const path = require('path');

module.exports = {
    entry: {
        path: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    mode: "development",
    devtool: "in-line-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
            port: 3000,
            hot: true,
        },
    module: {
        rules: [ 
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                { test: /\.(gif|png|jpe?g|svg)$/i, type: "asset/resource",
                      use: [
                 {
                   loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                progressive: true,
                },
                 // optipng.enabled: false will disable optipng
                 optipng: {
                   enabled: false,
                 },
                 pngquant: {
                   quality: [0.65, 0.90],
                   speed: 4
                 },
                 gifsicle: {
                   interlaced: false,
                 },
                 // the webp option will enable WEBP
                 webp: {
                   quality: 75
                 }
            }
          },
              ],
          }]
          },
}
