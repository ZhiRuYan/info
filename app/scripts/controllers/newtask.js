'use strict';

angular.module('infoApp')
  .controller('NewtaskCtrl', ['$scope', '$uibModalInstance', 'uiService',
    function ($scope, $uibModalInstance, uiService) {
      $scope.actions = {
        submit: function () {
          // $validator.validate($scope, 'v1').success(function () {
          //   if (entity.vote_id) {//edit
          //     voteService.updateVote(entity).then(function () {
          //       $uibModalInstance.close($scope.entity);
          //     });
          //   }else {//create
          //     voteService.createVote($scope.entity).then(function () {
          //       $uibModalInstance.close($scope.entity);
          //     });
          //   }
          // });
        },

        cancel: function () {
          $uibModalInstance.dismiss('cancel');
        }
      };
    }]);
