'use strict';

angular.module('infoApp')
  .controller('NewgroupCtrl', ['$scope', '$uibModalInstance', 'uiService', 'dataservice',
    function ($scope, $uibModalInstance, uiService, dataservice) {
      $scope.input = {
        groupName: '',
        groupDes: '',
        groupPass: ''
      }

      $scope.actions = {
        submit: function () {
          dataservice.createGroup($scope.input).then(function(res){
            if(res.data.result == '组群创建成功'){
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
