var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var glob = require('glob');  //通配符文件列表模块
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var cors = require('cors');   //解决跨域问题

var app = module.exports = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//启用session
// app.use(cookieParser('keyboard cat'));
app.use(session({
  secret: 'keyboard cat',//服务器端生成session的签名，相当于一个密钥
  store: new RedisStore({
    host: "127.0.0.1",
    port: "6379",
  }),//将session存入redis
  resave: true, //即使 session 没有被修改，也保存 session 值
  saveUninitialized: false,   //是否设置session在存储容器中可以给修改
  cookie: {maxAge: 1000 * 60 * 60, secure: false}
}));


//------解决跨域问题-------
app.use(cors());
//------------------------


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
  console.log('==================================')
  console.log('app转发路由')
  console.log(req.sessionID)
  console.log(req.session)
  console.log('==================================')
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
