const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outDir = "dist";

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
                include: [path.resolve(__dirname, "src")],
                options: {
                    compilerOptions: {
                        outDir: './' + outDir
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, outDir)])
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outDir),
        publicPath: '.',
        library: 'ts-declarations-folder-issue',
        libraryTarget: "umd"
    }
};