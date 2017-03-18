'use strict';

/**
 * @ngdoc service
 * @name infoApp.uiService
 * @description
 * # uiService
 * Service in the infoApp.
 */
angular.module('infoApp')
  .service('uiService',['$window',function ($window) {
    toastr.options.timeOut = 1000; //设置提示时间

    this.showError = function (message) {
      toastr.error(message);
    };

    this.showInfo = function (message) {
      toastr.info(message);
    };

    this.showSuccess = function (message) {
      toastr.success(message);
    };
    this.showWarning = function (message) {
      toastr.warning(message);
    };
    this.bootbox = bootbox;
  }]);
