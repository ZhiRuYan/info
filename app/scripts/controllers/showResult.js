'use strict';

angular.module('infoApp')
  .controller('ShowresultCtrl',  ['$scope', '$uibModalInstance', 'uiService', 'dataservice','entity',
    function ($scope, $uibModalInstance, uiService, dataservice,entity){
      $scope.listData = entity.data.summary;
      console.log(entity)
      $scope.actions = {
        cancel: function () {
          $uibModalInstance.dismiss('已取消');
        }
      };
  }]);
