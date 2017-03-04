'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('LoginCtrl', ['$scope', 'dataservice','$location', function ($scope, dataservice,$location) {

    $scope.loginInfo = {
      user: '',
      password: ''
    }
    $scope.passCheck = false;
    $scope.loginState = '登录';  //登录按钮上显示的文字，随ajax状态改变
    $scope.wrongInfo = '';
    var input = $scope.loginInfo;


    $scope.tryLogin = function () {
      $(".loginForm").removeClass('shake zoomInDown');
      dataservice.tryLogin($scope.loginInfo).then(function (res) {
        $scope.wrongInfo = res.data.result;
        if(res.data.result == '登录成功'){
          alert('登录成功');
          $location.path('layout.html');
        }else{
          $scope.passCheck = true;
          $(".loginForm").addClass('shake');
        }
      }).catch(function(err){
        console.log(err);
      });
    };
    $scope.toRegister = function(){
      $location.path('register.html');
    };

  }]);
