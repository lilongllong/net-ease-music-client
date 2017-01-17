const express = require('express');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


const config = require('./webpack.config.js');

const builder = webpack(config);

const port = 8000;
const app = new WebpackDevServer(builder, {
    publicPath: config.output.publicPath,
    proxy: config.devServer.proxy,
    hot: true,
    historyApiFallback: true,
});

app.use(express.static(path.join(__dirname, 'dist')));
app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`net-ease-music-server is running at http://localhost:${port}...`);
});


// app.use(webpackDevMiddleware(
//     builder,
//     {
//         hot: true,
//         publicPath: config.output.publicPath,
//         stats: {
//             chunks: false,
//             colors: true
//         }
//     }
// ));
// app.use('/api/*', (req, res, next) => {
//      //req.url = req.baseUrl; // Janky hack...
//     const apiProxy = httpProxy.createProxyServer({});
//     apiProxy.web(req, res, {
//         target: {
//           host: 'music.163.com',
//           protocol: 'http:',
//           port: 80
//         },
//         ignorePath: false,
//         changeOrigin: true,
//         secure: false,
//         headers: {
//             'Referer': 'http://music.163.com'
//         }
//     });
// });
