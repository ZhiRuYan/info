/**
 * Created by 志如 on 2017/3/4.
 */
'use strict';

//此文件是设置所需要的一系列中间件
var checkIsLogin = function (req, res, next) {
  console.log(req.session);
  console.log(req.sessionID);
  if (req.session.user) {
    next();
  } else {
      res.redirect('/login.html');
  }
};

module.exports = {
  checkIsLogin: checkIsLogin
};
