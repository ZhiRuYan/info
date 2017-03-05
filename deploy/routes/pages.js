// /**
//  * Created by 志如 on 2017/3/4.
//  */
var express = require('express');
var router = express.Router();
var session = require('express-session');


router.get('/layout.html', function(req, res, next) {
  console.log('==================================')
  console.log('后端layout路由')
  console.log(req.sessionID)
  console.log(req.session)
  console.log('==================================')
  next();
});


module.exports = router;

