'use strict';

angular.module('infoApp')
  .controller('JoingroupCtrl', ['$scope', '$uibModalInstance', 'uiService', 'dataservice',
    function ($scope, $uibModalInstance, uiService, dataservice) {
      $scope.input = {
        groupID: '',
        groupPass: ''
      }

      $scope.actions = {
        submit: function () {
          dataservice.joinGroup($scope.input).then(function (res) {
            if(res.data.result == '加入组群成功'){
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
