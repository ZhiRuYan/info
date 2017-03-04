'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('RegisterCtrl', ['$scope', 'dataservice', '$location',function ($scope, dataservice, $location) {
    $scope.user = {
      username: '',
      email: '',
      pass: '',
      passRepeat: ''
    };
    $scope.addUser = function () {
      $(".sign-up").removeClass('shake zoomInUp');
      dataservice.register($scope.user).then(function (res) {
        if(res.data.result=='用户已存在'){
          alert('用户已存在');
          $(".sign-up").addClass('shake');
        }else if(res.data.result=='操作成功'){
          alert('操作成功');
          $location.path('login.html');
        }else{
          alert('系统错误');
        }
      }).catch(function(err){
        console.log(err);
      });
    };
    $scope.toLogin = function(){
      $location.path('login.html');
    };
    $scope.isExist = false;
  }]);
