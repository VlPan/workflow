const path = require('path');


let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{ // Preprocessing steps!
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/, // only js files
            }
        ]
    }
}

module.exports = config;