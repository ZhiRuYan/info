'use strict';

angular.module('infoApp')
  .controller('FillinCtrl', ['$scope', '$uibModalInstance', 'uiService', 'dataservice','entity',
    function ($scope, $uibModalInstance, uiService, dataservice,entity) {
      $scope.options = entity.data;
      $scope.isCreator = entity.isCreator;
      $scope.actions = {
        submit: function () {
          console.log($scope.options.details)
          var input = {
            taskName:$scope.options.taskName,
            details:$scope.options.details
          }
          dataservice.fillInTask(input).then(function(res){
            if(res.data.result == '提交成功'){
              $uibModalInstance.close(res.data.result);
            }
            else{
              $uibModalInstance.dismiss(res.data.result);
            }
          }).catch(function(err){
            $uibModalInstance.dismiss('系统错误');
          });
        },
        cancel: function () {
          $uibModalInstance.dismiss('已取消');
        }
      };
    }]);
