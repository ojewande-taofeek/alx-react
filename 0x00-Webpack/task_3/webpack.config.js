const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        header: {
            import: './modules/header/header.js',
            dependOn: 'shared',
        },
        body: {
            import: './modules/body/body.js',
            dependOn: 'shared',
        },
        footer: {
            import: './modules/footer/footer.js',
            dependOn: 'shared',
        },
        shared: 'jquery',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
        chunks: 'all',
     },
    },
    devServer: {
        static: path.join(__dirname, './public'),
		open: true,
        port: 8564,
    },
    plugins: [new HtmlWebpackPlugin(
        {
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
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
                            webp: {
                                quality: 75
                            }
                        },
                    },
                ],
            }, 
            {
                test: /\.css$/i, use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
