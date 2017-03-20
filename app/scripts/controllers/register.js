'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('RegisterCtrl', ['$scope', 'dataservice', '$location','uiService','$state',function ($scope, dataservice, $location,uiService,$state) {
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
          uiService.showError('用户已存在');
          $(".sign-up").addClass('shake');
        }else if(res.data.result=='操作成功'){
          uiService.showSuccess('操作成功');
          $state.go('login');
        }else{
          uiService.showWarning('系统错误');
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
