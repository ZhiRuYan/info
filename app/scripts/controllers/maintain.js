'use strict';

angular.module('infoApp')
  .controller('MaintainCtrl', ['$scope', 'dataservice', '$location', 'uiService', '$state', '$uibModal', '$rootScope', function ($scope, dataservice, $location, uiService, $state, $uibModal, $rootScope) {
    $scope.groupList = [];


    //功能弹窗
    $scope.theFunction = function (index,data) {
      var templateurl = '';
      var controller = '';
      switch (index) {
        case 'createGroup':
          templateurl = 'newgroup';
          controller = 'NewgroupCtrl';
          break;
        case 'joinGroup':
          templateurl = 'joingroup';
          controller = 'JoingroupCtrl';
          break;
        case 'createTask':
          templateurl = 'newtask';
          controller = 'NewtaskCtrl';
          break;
        case 'tasksList':
          templateurl = '';
          controller = '';
          break;
        case 'membersList':
          templateurl = 'membersList';
          controller = 'MemberslistCtrl';
          break;
        case 'changeInfo':
          templateurl = '';
          controller = '';
          break;
      }

      var dialog = $uibModal.open({
        templateUrl: 'views/' + templateurl + '.html',
        controller: controller,
        size: 'md',
        resolve: {
          entity:function(){
            return {
              index:index,
              data:data
            };
          }
        }
      });
      dialog.result.then(function (result) {
        getGroupList();
        uiService.showSuccess(result);
      }, function (reason) {
        if (reason != '已取消' && reason != 'backdrop click') {
          uiService.showError(reason);
        }
      });
    };


    $scope.whichConfirm = function (index, id) {
      var info = [];
      switch (index) {
        case 1:
          info = '确定解散该分组？';
          break;
        case 2:
          info = '确定退出该分组？'
          break;
        default:
          return;

      }
      uiService.bootbox.confirm(info, function (result) {
        if (result) {
          if(index==1){
            releaseGroup(id);
          }else if(index == 2){
            exitGroup(id);
          }
        }
      });
    };


    //解散分组
    function releaseGroup(id) {
      var input = {groupID: id};
      dataservice.releaseGroup(input).then(function (res) {
        getGroupList();
        uiService.showSuccess(res.data.result);
      }).catch(function (err) {
        uiService.showError('系统错误');
      });
    };

    //退出分组
    function exitGroup(id) {
      var input = {groupID: id};
      dataservice.exitGroup(input).then(function (res) {
        getGroupList();
        uiService.showSuccess(res.data.result);
      }).catch(function (err) {
        uiService.showError('系统错误');
      });
    };


    //获取组群列表
    function getGroupList() {
      dataservice.getGroupList().then(function (res) {
        $scope.groupList = res.data;
      });
    };
    getGroupList();
  }]);
