const path = require('path');

// https://webpack.js.org/

// entry point ?

// where to output bundle file ?

// __dirname -> variable for the current location/dir
// console.log(path.join(__dirname, 'public'));


// node will use these exports in other places
// NB! string concat and paths don't always work well on all OS's
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), // NB! absolute path where the file should be sent !!
        filename: 'bundle.js'
    },
    // loader ( let's you customize webpack activity upon loading a file )
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
             test: /\.s?css$/, // makes s optional
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};