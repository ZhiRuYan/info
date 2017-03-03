'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('RegisterCtrl', ['$scope', 'dataservice', function ($scope, dataservice) {
    $scope.user = {
      username: '',
      email: '',
      pass: '',
      passRepeat: ''
    };
    $scope.addUser = function () {
      dataservice.register($scope.user).then(function (res) {

        console.log('成功');
        console.log(res);
      });
    };
    $scope.isExist = false;


  }]);
