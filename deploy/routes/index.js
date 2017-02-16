var express = require('express');
var router = express.Router();
var service = require('../service/apiService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/main', function(req, res, next) {
  // res.json({data:'测试数据'});
  service.testApi().then(function(data){
    console.log(data)
    res.json(data)
  });
});

module.exports = router;
