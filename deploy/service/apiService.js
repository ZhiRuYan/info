/**
 * Created by ZhiRu on 2/16/2017.
 */
var Promise = require('bluebird');
var testApi = function () {
  return new Promise(function (resolve, reject) {
    resolve({testData:'测试数据，位于apiservice'});
  });
}
//导出服务函数
  module.exports = exports = {
    testApi: testApi
  }
