'use strict';

angular.module('infoApp')
  .controller('TasklistCtrl', ['$scope', 'dataservice', '$location','$state', '$rootScope','uiService',function ($scope, dataservice, $location,$state,$rootScope,uiService) {
    dataservice.getTasksList().then(function(res){
      if(res.data.length<1){
        uiService.showError('暂无数据');
      }
      $scope.tasksList = res.data;
    });
  }]);
