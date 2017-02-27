var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var glob = require('glob');  //通配符文件列表模块


var cors = require('cors');   //解决跨域问题

var app = module.exports = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

//------解决跨域问题-------
app.use(cors());
//------------------------

app.use(express.static(path.join(__dirname, 'public')));


//预加载所有Model
var models = glob.sync(__dirname + '/models/**/*.js');
models.forEach(function (model) {
  require(model);
});
//------加载所有router-----
var routers = glob.sync(__dirname + '/routes/**/*.js');
routers.forEach(function (route) {
  app.use(require(route));
});

//将所有路由转发到index.html

app.get('*.html', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
