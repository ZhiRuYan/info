'use strict';

angular.module('infoApp')
    .controller('MaintainCtrl', ['$scope', 'dataservice', '$location', 'uiService', '$state', '$uibModal', function ($scope, dataservice, $location, uiService, $state, $uibModal) {
      $scope.createGroup = function(){
        var dialog = $uibModal.open({
          templateUrl: 'views/newtask.html',
          controller: 'NewtaskCtrl',
          size: 'md',
          resolve: {

          }
        });
        console.log(dialog)
        dialog.result.then(function () {
          uiService.showSuccess('新建组群成功');
        });
      } ;
      $scope.whichConfirm = function (index) {
        var info = [];
        switch(index){
          case 1:
            info = '确定解散该分组？';
            break;
          case 2:
            info= '确定退出该分组？'
            break;
          default:
            return;

        }
            uiService.bootbox.confirm(info, function(result) {
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
