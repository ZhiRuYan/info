'use strict';

angular.module('infoApp')
    .controller('MaintainCtrl', ['$scope', 'dataservice', '$location', 'uiService', '$state', '$uibModal', function ($scope, dataservice, $location, uiService, $state, $uibModal) {
        $scope.dissolution = function () {
            // uiService.bootbox.confirm("确定解散该分组?", function(result) {
            //   if (result) {
            //     //
            //     console.log(result)
            //   }
            // });
        };

        $scope.create = function () {
            var dialog = $uibModal.open({
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                size: 'md',
                resolve: {
                    entity: function () {
                        return {
                            type: 1
                        };
                    }
                }
            });

            dialog.result.then(function () {
                uiService.showSuccess('投票创建成功');
            });

        };
    }]);
