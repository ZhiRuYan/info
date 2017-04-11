'use strict';

angular.module('infoApp')
  .controller('NewtaskCtrl', ['$scope', '$uibModalInstance', 'uiService', 'entity', 'dataservice',
    function ($scope, $uibModalInstance, uiService, entity, dataservice) {

      $scope.entity = entity;
      $scope.input = {
        taskName: '',
        taskDes: '',
        taskCreator: '',
        belong: $scope.entity.data[0],
        // details: [],
        // states: false
      };

      $scope.actions = {
        submit: function () {
          $scope.input.taskCreator = $scope.entity.data[1];
          dataservice.createTask($scope.input).then(function (res) {
            if (res.data.result == '操作成功') {
              $uibModalInstance.close(res.data.result);
            }
            else {
              $uibModalInstance.dismiss(res.data.result);
            }
          }).catch(function (err) {
            console.log(err)
            $uibModalInstance.dismiss('系统错误');
          });

        },
        cancel: function () {
          $uibModalInstance.dismiss('已取消');
        }
      };
    }]);
