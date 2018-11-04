const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/index.ts',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '.',
        library: 'ts-declarations-folder-issue',
        libraryTarget: "umd"
    }
};