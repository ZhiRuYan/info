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
              $uibModalInstance.close('组群创建成功');
            }
            else{
              $uibModalInstance.dismiss('组群创建失败');
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
