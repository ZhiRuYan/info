'use strict';

/**
 * @ngdoc function
 * @name infoApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the infoApp
 */
angular.module('infoApp')
  .controller('LayoutCtrl', ['$scope', 'dataservice', '$location', function ($scope, dataservice, $location) {

    $scope.logout = function () {
      dataservice.logout().then(function (res) {
        if (res.data.state == '退出成功') {
          $location.path('login.html');
        }
      });
    };

    dataservice.initPage().then(function(res){

    });


  }]);
