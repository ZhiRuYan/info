'use strict';

angular.module('infoApp')
  .controller('TasklistCtrl', ['$scope', 'dataservice', '$location', '$state', '$rootScope', 'uiService', function ($scope, dataservice, $location, $state, $rootScope, uiService) {


    $scope.editTask = function (bool) {
      if (bool) {

      }
      console.log('edit')
    };

    $scope.deleteTask = function (data) {
      uiService.bootbox.confirm('确认删除该任务？', function (result) {
        if (result) {
          var input = {
            taskName: data
          };
          dataservice.removeTask(input).then(function (res) {
            if(res.data.result=='操作成功'){
              uiService.showSuccess(res.data.result);
            }else{
              uiService.showError(res.data.result);
            }
            getTaskList();
          }).catch(function (err) {
            uiService.showError('系统错误');
          });
        }
      });
    };

    function getTaskList() {
      dataservice.getTasksList().then(function (res) {
        if (res.data.length < 1) {
          uiService.showError('暂无数据');
        }
        $scope.tasksList = res.data;
      });
    };
    getTaskList();
  }]);
