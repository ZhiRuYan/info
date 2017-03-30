'use strict';

angular.module('infoApp')
  .controller('MemberslistCtrl', ['$scope', '$uibModalInstance', 'uiService', 'dataservice', 'entity',
    function ($scope, $uibModalInstance, uiService, dataservice, entity) {
      $scope.entity = entity;

      $scope.removeMember = function (name) {
        var input = {
          name: name,
          groupID: $scope.entity.data
        };
        dataservice.removeMember(input).then(function (res) {
          if(res.data.result == '删除成功'){
            getMemberList();
            uiService.showSuccess(res.data.result);
          }
          else{
            uiService.showError(res.data.result);
          }
        }).catch(function (err) {
          console.log(err)
        });
      };

      $scope.actions = {
        submit: function () {
          $uibModalInstance.dismiss('已取消');
        },
        // cancel: function () {
        //   $uibModalInstance.dismiss('已取消');
        // }
      };


      function getMemberList() {
        dataservice.getMemberList($scope.entity).then(function (res) {
          if (res.data instanceof Array) {
            $scope.memberList = res.data;
          } else {
            uiService.showError(res.data.result);
          }

        }).catch(function (err) {
          uiService.showError('系统错误');
        });
      };

      getMemberList();
    }]);
