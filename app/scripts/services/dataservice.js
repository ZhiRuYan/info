'use strict';

/**
 * @ngdoc service
 * @name infoApp.dataservice
 * @description
 * # dataservice
 * Service in the infoApp.
 */
angular.module('infoApp')
  .service('dataservice', ['$http', 'config', function ($http, config) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var buildUrl = function (relativePath) {
      return config.apiRoot + 'api/' + relativePath;
    };

    this.testApi = function () {
      return $http.post(buildUrl('main'));
    };

    //注册新用户
    this.register = function (input) {
      return $http.post(buildUrl('register'), input);
    };

    //登录验证、
    this.tryLogin = function (input) {
      return $http.post(buildUrl('tryLogin'), input);
    };

    //退出登录、
    this.logout = function () {
      return $http.post(buildUrl('logout'));
    };

    //初始化页面、
    this.initPage = function () {
      return $http.post(buildUrl('initPage'));
    };

    //新建群组
    this.createGroup = function (input) {
      return $http.post(buildUrl('createGroup'), input);
    };

    //获取群组列表
    this.getGroupList = function () {
      return $http.post(buildUrl('getGroupList'));
    };

    //解散群组
    this.releaseGroup = function (input) {
      return $http.post(buildUrl('releaseGroup'),input);
    };

    //加入群组
    this.joinGroup = function (input) {
      return $http.post(buildUrl('joinGroup'),input);
    };

    //退出群组
    this.exitGroup = function (input) {
      return $http.post(buildUrl('exitGroup'),input);
    };

    //获取成员列表
    this.getMemberList = function (input) {
      return $http.post(buildUrl('getMemberList'),input);
    };

    //从群组中删除成员
    this.removeMember = function (input) {
      return $http.post(buildUrl('removeMember'),input);
    };

    //新建任务
    this.createTask = function (input) {
      return $http.post(buildUrl('createTask'),input);
    };

    //获取任务列表
    this.getTasksList = function (input) {
      return $http.post(buildUrl('getTasksList'),input);
    };

    //删除任务
    this.removeTask = function (input) {
      return $http.post(buildUrl('removeTask'),input);
    };

  }]);
