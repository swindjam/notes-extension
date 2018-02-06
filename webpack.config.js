const webpack = require('webpack');

module.exports = {
    entry: {
      main: "./extension/src/entry.js"
    },

    output: {
        path: __dirname + "/extension/build",
        filename: "[name].js",
        publicPath: "/extension/build"
    },

    module: {
        rules: [
          {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /\/node_modules\//
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]!sass-loader' // loaders to preprocess CSS
            }
        ]
    }
};
