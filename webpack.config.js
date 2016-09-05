var webpack = require("webpack");
var Path = require('path');
var fs = require('fs');

/** client config */
var externals = {};

var clientConfig = {
    entry: {
        app: Path.join(projectPath, "src/javascript/app.js"),
        vendor: []
    },
    output: {
        path: Path.join(projectPath, "public/js/"),
        publicPath: '/js/',
        filename: 'app.js',
        chunkFilename: '[name].app.js'
    },
    resolve: {
        alias: {
            bower: Path.join(projectPath, "vendor/.bower"),
            config: Path.join(projectPath, "config"),
            script: Path.join(projectPath, "src/javascript")
        }
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },
    externals: externals,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                minChunks: Infinity,
                filename: "vendor.bundle.js"
            }
        ),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /a^/),
    ]
};

module.exports = [clientConfig];