const express = require("express");
const httpProxy = require("http-proxy");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
app.use(express.static(path.join(__dirname, "./dist")));

const config = require("./webpack.config.js");
const builder = webpack(config);

app.use(webpackDevMiddleware(
    builder,
    {
        hot: true,
        publicPath: config.output.publicPath,
        stats: {
            chunks: false,
            colors: true
        }
    }
));

app.use("/api/*", (req, res, next) => {
    req.url = req.baseUrl; // Janky hack...
    apiProxy.web(req, res, {
        target: {
          host: "music.163.com",
          protocol: "http:",
          port: 80
        },
        ignorePath: false,
        changeOrigin: true,
        secure: false,
        headers: {
            "Referer": "http://music.163.com"
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`net-ease-music-server is running at http://localhost:${port}...`);
});
