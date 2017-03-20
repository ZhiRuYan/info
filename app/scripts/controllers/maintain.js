'use strict';

angular.module('infoApp')
    .controller('MaintainCtrl', ['$scope', 'dataservice', '$location', 'uiService', '$state', '$uibModal', function ($scope, dataservice, $location, uiService, $state, $uibModal) {
      $scope.createGroup = function(){

      } ;
      $scope.dissolution = function () {
            uiService.bootbox.confirm("确定解散该分组?", function(result) {
              if (result) {
                //
                console.log(result)
              }
            });
        };

        $scope.createTask = function () {
            var dialog = $uibModal.open({
                templateUrl: 'views/newtask.html',
                controller: 'NewtaskCtrl',
                size: 'md',
                resolve: {

                }
            });

            dialog.result.then(function () {
                uiService.showSuccess('投票创建成功');
            });

        };
    }]);
