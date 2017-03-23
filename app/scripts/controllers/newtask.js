'use strict';

angular.module('infoApp')
  .controller('NewtaskCtrl', ['$scope', '$uibModalInstance', 'uiService',
    function ($scope, $uibModalInstance, uiService) {
      $scope.taskName = '';
      $scope.taskDes = '';
      $scope.taskOptions = [];
      $scope.actions = {
        submit: function () {


        },

        cancel: function () {
          $uibModalInstance.close('cancel');
        }
      };
    }]);
