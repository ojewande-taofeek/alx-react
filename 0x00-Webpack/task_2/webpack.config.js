module.exports = {
    mode: 'production',
    entry: ['./js/dashboard_main.js', './css/main.css', './assets/holberton-logo.jpg'],
    output: {
        filename: 'bundle.js',
        path: __dirname +  '/public',
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
     },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
            },
        ]
},
};
