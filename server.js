const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const port = process.env.PORT || 3000;
const webpackHotMiddleware = require('webpack-hot-middleware');

app.listen(port, () => { console.log(`App is listening on port ${port}`) });
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

let compiler = webpack(webpackConfig);
app.use(webpackHotMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath, stats: { colors: true }
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.resolve(__dirname, 'dist')));