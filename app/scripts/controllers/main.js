'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('MainCtrl', ['$scope', 'config', 'dataservice', function ($scope, config, dataservice) {
    dataservice.testApi().then(function (response) {
      $scope.test = response.data.testData;
    });

  }]);
