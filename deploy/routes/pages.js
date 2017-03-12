// /**
//  * Created by 志如 on 2017/3/4.
//  */
var express = require('express');
var router = express.Router();
var session = require('express-session');
var fs = require('fs');
var middleware = require('../service/middleware');



router.get('/layout.html', middleware.checkIsLogin,function(req, res, next) {
  if(req.session){
    req.session = req.session
  }
  console.log('==================================')
  console.log('后端layout路由')
  console.log(req.sessionID)
  console.log(req.session)
  console.log('==================================')
  next();
});


module.exports = router;

