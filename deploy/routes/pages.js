// /**
//  * Created by 志如 on 2017/3/4.
//  */
var express = require('express');
var router = express.Router();

router.get('/layout.html', function(req, res, next) {
  console.log(0)
  next();
});


module.exports = router;

