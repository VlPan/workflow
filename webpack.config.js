const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "build/"
    },
    module:{ // Preprocessing steps!
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/, // only js files
            },
            {
                //use: ['style-loader','css-loader'], // order is important here!! from right to left
                loader: ExtractTextPlugin.extract ({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 40000}
                    },
                    'image-webpack-loader',
                    //'file-loader'             //ORDER FROM BOTTOM TO TOP
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css') // New big file with style name
    ]
}

module.exports = config;