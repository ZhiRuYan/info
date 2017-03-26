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


//新建群组
app.post('/api/createGroup', function (req, res, next) {
  if (!req.session.user.user) {
    res.json({message: '未登录用户'});
  }
  req.body.creator = req.session.user.user;
  service.createGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//获取群组列表
app.post('/api/getGroupList', function (req, res, next) {
  if (!req.session.user.user) {
    res.json({message: '未登录用户'});
  }
  req.body.user = req.session.user.user;
  service.getGroupList(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//解散群组
app.post('/api/releaseGroup', function (req, res, next) {
  if (!req.session.user.user) {
    res.json({message: '未登录用户'});
  }
  req.body.user = req.session.user.user;
  service.releaseGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//加入群组
app.post('/api/joinGroup', function (req, res, next) {
  if (!req.session.user.user) {
    res.json({message: '未登录用户'});
  }
  req.body.user = req.session.user.user;
  service.joinGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//退出群组
app.post('/api/exitGroup', function (req, res, next) {
  if (!req.session.user.user) {
    res.json({message: '未登录用户'});
  }
  req.body.user = req.session.user.user;
  service.exitGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});



// module.exports = router;
