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

module.exports = router;
