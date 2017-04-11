'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('LayoutCtrl', ['$scope', 'dataservice', '$location','$state', '$rootScope',function ($scope, dataservice, $location,$state,$rootScope) {

    $scope.logout = function () {
      dataservice.logout().then(function (res) {
        if (res.data.state == '退出成功') {
          $state.go('login');
        }
      });
    };
    $scope.changeState = function(index){
      switch (index){
        case 'myinfo':
          $state.go('layout.myinfo');
          break;
        case 'maintain':
          $state.go('layout.maintain');
          break;
        case 'tasklist':
          $state.go('layout.tasklist');
          break;
        default:
          $state.go('layout.myinfo');
      };
    };

    dataservice.initPage().then(function(res){
      $rootScope.username = res.data;
    });


  }]);
