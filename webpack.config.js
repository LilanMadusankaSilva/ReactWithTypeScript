const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = false;

module.exports = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "nosources-source-map" : "source-map",
    entry: {
        app: ['./src/app/app.tsx', 'webpack-hot-middleware/client'],
        css: './src/app/app.scss',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, 'src', 'app', 'index.html')
            }
        ),
        new webpack.HotModuleReplacementPlugin()
    ]
};
