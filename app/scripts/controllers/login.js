'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('LoginCtrl', ['$scope', 'dataservice', function ($scope, dataservice) {

    $scope.loginInfo = {
      user: '',
      password: ''
    }
    $scope.passCheck = false;
    $scope.loginState = '登录';  //登录按钮上显示的文字，随ajax状态改变
    var input = $scope.loginInfo;


    $scope.tryLogin = function () {
      $scope.passCheck = true;
      dataservice.tryLogin(input).then(function () {

      });
    };

  }]);
