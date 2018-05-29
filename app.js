/**
 * Created by lingyu on 18/5/26.
 */
'use strict';
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

if(process.env.NODE_ENV === 'development') {
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require("webpack-hot-middleware")(compiler));
}



app.use('/static',express.static(path.join(__dirname, 'public'), {'extensions': ['html', 'js', 'css'], 'maxAge': '7d'}));
app.use('/', routes);
