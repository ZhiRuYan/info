'use strict';

angular.module('infoApp')
  .controller('MyinfoCtrl', ['$scope', 'dataservice','$location','uiService', '$state',function ($scope, dataservice,$location,uiService,$state) {
    dataservice.getMyinfo().then(function(res){
      $scope.info = res.data;
    });
    $scope.saveChange = function(){
      var input = {
        name:$scope.info.name,
        email:$scope.info.email
      }
      dataservice.changeMyinfo(input).then(function(res){
        if(res.data.result == '修改成功'){
          uiService.showSuccess(res.data.result);
        }
        else{
          uiService.showError(res.data.result);
        }
      });
    };
  }]);
