'use strict';

angular.module('infoApp')
  .controller('TasklistCtrl', ['$scope', 'dataservice', '$location', '$state', '$rootScope', 'uiService', '$uibModal', function ($scope, dataservice, $location, $state, $rootScope, uiService, $uibModal) {

    $scope.deleteTask = function (data) {
      uiService.bootbox.confirm('确认删除该任务？', function (result) {
        if (result) {
          var input = {
            taskName: data
          };
          dataservice.removeTask(input).then(function (res) {
            if (res.data.result == '操作成功') {
              uiService.showSuccess(res.data.result);
            } else {
              uiService.showError(res.data.result);
            }
            getTaskList();
          }).catch(function (err) {
            uiService.showError('系统错误');
          });
        }
      });
    };


    $scope.editTask = function (isCreator,data) {
      var templateurl = '';
      var controller = '';
      if(!isCreator){
        templateurl = 'fillin';
        controller = 'FillinCtrl';
      }else{
        templateurl = 'showResult';
        controller = 'ShowresultCtrl';
      }

      var dialog = $uibModal.open({
        templateUrl: 'views/' + templateurl + '.html',
        controller: controller,
        size: 'md',
        resolve: {
          entity: function () {
            return {
              // index: index,
              data: data
            };
          }
        }
      });
      dialog.result.then(function (result) {
        getTaskList();
        uiService.showSuccess(result);
      }, function (reason) {
        if (reason != '已取消' && reason != 'backdrop click') {
          uiService.showError(reason);
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
