'use strict';

/**
 * @ngdoc service
 * @name infoApp.dataservice
 * @description
 * # dataservice
 * Service in the infoApp.
 */
angular.module('infoApp')
	.service('dataservice', ['$http', 'config', function($http, config) {
		// AngularJS will instantiate a singleton by calling "new" on this function

		var buildUrl = function(relativePath) {
			return config.apiRoot + 'api/' + relativePath;
		};

		this.testApi = function(){
		  return $http.post(buildUrl('main'));
    };

		//注册新用户
    this.register = function(input){
      return $http.post(buildUrl('register'),input);
    };

    //登录验证、
    this.tryLogin = function(input){
      return $http.post(buildUrl('tryLogin'),input);
    };

    //退出登录、
    this.logout = function(){
      return $http.post(buildUrl('logout'));
    };

    //初始化页面、
    this.initPage = function(){
      return $http.post(buildUrl('initPage'));
    };
	}]);
