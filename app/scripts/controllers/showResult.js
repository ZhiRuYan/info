'use strict';

angular.module('infoApp')
  .controller('ShowresultCtrl',  ['$scope', '$uibModalInstance', 'uiService', 'dataservice','entity',
    function ($scope, $uibModalInstance, uiService, dataservice,entity){
      $scope.entity = entity.data;
      $scope.listData = entity.data.summary;
      console.log(entity)
      $scope.actions = {
        cancel: function () {
          $uibModalInstance.dismiss('已取消');
        }
      };

      // $scope.generateExcle = function(){
      //   // var input = {
      //   //   taskName : entity.data.taskName
      //   // };
      //   // dataservice.generateExcle(input).then(function(res){
      //   //   console.log(res.data)
      //   // }).catch(function(err){
      //   //   $uibModalInstance.dismiss('系统错误');
      //   // });
      //   var url = '/api/generateExcle/'+entity.data.taskName;
      //   window.location = url;
      // };
  }]);
