/**
 * Created by ZhiRu on 2017/2/17.
 */
var express = require('express');
var router = express.Router();
var service = require('../service/apiService');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = module.exports = express();
var middleware = require('../service/middleware');


// var middleware = require('../service/middleware');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/main', function (req, res, next) {
  // res.json({data:'测试数据'});
  console.log('api=main' + req.sessionID)
  service.testApi().then(function (data) {
    console.log(data)
    res.json(data);
  });
});

//注册新用户
app.post('/api/register', function (req, res, next) {
  service.register(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//登录验证
app.post('/api/tryLogin', function (req, res, next) {
  service.tryLogin(req.body).then(function (data) {
    var user = {
      user: req.body.user,
      password: req.body.password
    };
    req.session.user = user;
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});
//退出
app.post('/api/logout', function (req, res, next) {
  req.session.destroy();
  res.json({state: '退出成功'});
});

//初始化layout
app.post('/api/initPage', function (req, res, next) {
  res.json(req.session.user.user)
});

// module.exports = router;
