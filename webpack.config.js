const path = require("path");
// const { webpack } = require("webpack");
const webpack = require("webpack");

module.exports = {
    // entry is the root of the bundle and the beginning fo the dependency graph
    entry: './assets/js/script.js',
    // webpack will next take the entry point and bundle that code and output it to a folder we specify
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // plugins play an important role in directing webpack what to do.
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    // mode defines how we want webpack to run
    mode: 'development'

};
