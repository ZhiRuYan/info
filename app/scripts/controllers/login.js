'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the infoApp
 */
// angular.module('infoApp')
//   .controller('LoginCtrl', ['$scope', 'dataservice','$location','uiService', function ($scope, dataservice,$location,uiService) {
//
//     $scope.loginInfo = {
//       user: '',
//       password: ''
//     };
//     $scope.passCheck = false;
//     $scope.loginState = '登录';  //登录按钮上显示的文字，随ajax状态改变
//     $scope.wrongInfo = '';
//     var input = $scope.loginInfo;
//
//
//     $scope.tryLogin = function () {
//       $(".loginForm").removeClass('shake zoomInDown');
//       dataservice.tryLogin(input).then(function (res) {
//         $scope.wrongInfo = res.data.result;
//         if(res.data.result == '登录成功'){
//           // alert('登录成功');
//           $location.path('layout.html');
//         }else{
//           // $scope.passCheck = true;
//           uiService.showError('密码错误，请重新输入');
//           $(".loginForm").addClass('shake');
//         }
//       }).catch(function(err){
//         console.log(err);
//       });
//     };
//     $scope.toRegister = function(){
//       $location.path('register.html');
//     };
//
//   }]);

angular.module('infoApp')
  .controller('LoginCtrl', ['$scope', 'dataservice','$location','uiService', '$state',function ($scope, dataservice,$location,uiService,$state) {

    $scope.loginInfo = {
      user: '',
      password: ''
    };
    $scope.passCheck = false;
    $scope.loginState = '登录';  //登录按钮上显示的文字，随ajax状态改变
    $scope.wrongInfo = '';
    var input = $scope.loginInfo;


    $scope.tryLogin = function () {
      $(".loginForm").removeClass('shake zoomInDown');
      dataservice.tryLogin(input).then(function (res) {
        $scope.wrongInfo = res.data.result;
        if(res.data.result == '登录成功'){
          $state.go('layout.myinfo');
        }else{
          // $scope.passCheck = true;
          uiService.showError('密码错误，请重新输入');
          $(".loginForm").addClass('shake');
        }
      }).catch(function(err){
        console.log(err);
      });
    };
    $scope.toRegister = function(){
      $state.go('register');
    };

  }]);
