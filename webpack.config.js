const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'examples/src/index.html'),
    filename: './index.html',
});

module.exports = {
    entry: path.join(__dirname, 'examples/src/index.js'),
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.join(__dirname, 'examples/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: 'style-loader!css-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [htmlWebpackPlugin],
    optimization: {
        minimize: true,
    },
    devServer: {
        port: 3001,
    },
};
