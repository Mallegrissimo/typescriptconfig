const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    entry: {
        main: "./src/index.ts",
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /(\.ts)x|\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: require.resolve('html-loader'),
                options: { minimize: false }
            }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
};