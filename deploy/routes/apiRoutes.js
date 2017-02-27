/**
 * Created by ZhiRu on 2017/2/17.
 */
var express = require('express');
var router = express.Router();
var service = require('../service/apiService');

router.post('/api/main', function(req, res, next) {
  // res.json({data:'测试数据'});
  service.testApi().then(function(data){
    console.log(data)
    res.json(data)
  });
});

//注册新用户
router.post('/api/register', function(req, res, next) {
  service.register(req.body).then(function(data){
    res.json(data)
  });
});

//登录验证
router.post('/api/tryLogin', function(req, res, next) {
  service.tryLogin(req.body).then(function(data){
    res.json(data)
  });
});


module.exports = router;
