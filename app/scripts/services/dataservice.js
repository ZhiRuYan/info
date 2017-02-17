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
	}]);
