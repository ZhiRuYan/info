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
var excel = require('node-xlsx');
var fs = require('fs');
var _ = require('underscore');


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
app.post('/api/createGroup', middleware.checkIsLogin,function (req, res, next) {
  req.body.creator = req.session.user.user;
  service.createGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//获取群组列表
app.post('/api/getGroupList', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.getGroupList(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//获取个人信息
app.post('/api/getMyinfo', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.getMyinfo(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//更改个人信息
app.post('/api/changeMyinfo', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.changeMyinfo(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//解散群组
app.post('/api/releaseGroup', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.releaseGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//加入群组
app.post('/api/joinGroup', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.joinGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//退出群组
app.post('/api/exitGroup', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.exitGroup(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//获取成员列表
app.post('/api/getMemberList', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.getMemberList(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//从群组中删除成员
app.post('/api/removeMember', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.removeMember(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//新建任务
app.post('/api/createTask', middleware.checkIsLogin,function (req, res, next) {
  service.createTask(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//获取任务列表
app.post('/api/getTasksList', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.getTasksList(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//删除任务
app.post('/api/removeTask', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.removeTask(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//填写任务
app.post('/api/fillInTask', middleware.checkIsLogin,function (req, res, next) {
  req.body.user = req.session.user.user;
  service.fillInTask(req.body).then(function (data) {
    res.json(data);
  }).catch(function (err) {
    res.json(err);
  });
});

//导出excle
app.get('/api/generateExcle/:taskName', middleware.checkIsLogin,function (req, res, next) {
  var input = {
    taskName:req.params.taskName
  }
  service.generateExcle(input).then(function (data) {
    var tmpData = data[0].summary;
    var rows = [_.keys(data[0].summary[0])];
    for(var i=0;i<tmpData.length;i++){
      var props = _.values(tmpData[i]);
      rows.push(props);
    }
    var result = excel.build([{name: "sheet1", data: rows}]);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" + encodeURIComponent('导出数据') + ".xlsx");
    res.end(result, 'binary');
  }).catch(function (err) {
    res.json(err);
  });
});


// module.exports = router;
