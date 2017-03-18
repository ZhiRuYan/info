// /**
//  * Created by 志如 on 2017/3/4.
//  */
var express = require('express');
var router = express.Router();
var session = require('express-session');
var middleware = require('../service/middleware');



router.get('/layout.html', middleware.checkIsLogin,function(req, res, next) {
  next();
});


module.exports = router;

