// /**
//  * Created by 志如 on 2017/3/4.
//  */
var express = require('express');
var router = express.Router();
var session = require('express-session');


router.get('/layout.html', function(req, res, next) {
  console.log(req.sessionID)
  console.log(req.session)
  next();
});


module.exports = router;

