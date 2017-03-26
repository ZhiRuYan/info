'use strict';

angular.module('infoApp')
  .controller('MemberslistCtrl', ['$scope', '$uibModalInstance', 'uiService', 'dataservice',
    function ($scope, $uibModalInstance, uiService, dataservice) {

      $scope.actions = {
        submit: function () {
          $uibModalInstance.dismiss('已取消');
        },
        // cancel: function () {
        //   $uibModalInstance.dismiss('已取消');
        // }
      };
    }]);
