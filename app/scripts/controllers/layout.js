'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('LayoutCtrl', ['$scope', 'dataservice', '$location','$state', function ($scope, dataservice, $location,$state) {

    $scope.logout = function () {
      dataservice.logout().then(function (res) {
        if (res.data.state == '退出成功') {
          $state.go('login');
        }
      });
    };
    $scope.changeState = function(index){
      switch (index){
        case 1:
          $state.go('layout.myinfo');
          break;
        case 2:
          $state.go('layout.maintain');
          break;
        case 3:
          $state.go('layout.myinfo');
          break;
        default:
          $state.go('layout.myinfo');
      };
    };

    // dataservice.initPage().then(function(res){
    //   $scope.username = res.data;
    // });


  }]);
