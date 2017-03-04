/**
 * Created by ZhiRu on 2/16/2017.
 */


//依赖工具
var Promise = require('bluebird');
var _ = require('underscore');


//mongo model
var UserModel = require('../models/users');
//api接口
var testApi = function () {
  return new Promise(function (resolve, reject) {
    resolve({testData: '测试数据，位于apiservice'});
  });
};


//注册新用户
var register = function (input) {
  return new Promise(function (resolve, reject) {
    var userList = new UserModel({
      name: input.username,
      email: input.email,
      password: input.pass
    });
    UserModel.find({name: input.username}, function (err, docs) {
      if(docs==''){
        userList.save(function (err) {
          if (err) {
            return reject(err);
          }
          else {
            return resolve({result:'操作成功'});
          }
        }).catch(function (err) {
          return reject(err)
        });
      }else{
        return reject({result: '用户已存在'});
      }
    });
  })
};


//登录验证
var tryLogin = function (input) {
  return new Promise(function (resolve, reject) {
    var user = input.user;
    var pass = input.password;
    UserModel.find({name: user}, function (err, docs) {
      if(docs!=''){
        if(pass==docs[0].password){
          resolve({result:'登录成功'});
        }else{
          reject({result:'密码错误'})
        }
      }else{
        return reject({result: '用户不存在'});
      }
    });
  });
};


//导出服务函数
module.exports = exports = {
  testApi: testApi,
  register: register,
  tryLogin: tryLogin
}
