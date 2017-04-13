'use strict';

/**
 * @ngdoc service
 * @name infoApp.config
 * @description
 * # config
 * Constant in the infoApp.
 */
angular.module('infoApp')
	.constant('config', (function() {
		var env = 'dev';
		var config = {
			dev: {
				apiRoot: 'http://127.0.0.1:3000/'
			},
			prod: {
				apiRoot: ''
			}
		};
		return config[env];
	})());


