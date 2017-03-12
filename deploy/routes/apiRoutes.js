/**
 * Created by ZhiRu on 2017/2/17.
 */
var express = require('express');
var router = express.Router();
var service = require('../service/apiService');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = module.exports = express();

// var middleware = require('../service/middleware');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/main', function (req, res, next) {
  // res.json({data:'测试数据'});
  console.log('api=main'+ req.sessionID)
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
  // req.session = null;
  console.log('```````````````````````'+req.sessionID)

  service.tryLogin(req.body).then(function (data) {
    console.log('```````````````````````'+req.sessionID)
    var user = {
      user: req.body.user,
      password: req.body.password
    };
    req.session.user = user;
    req.session.save();
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});


// module.exports = router;
