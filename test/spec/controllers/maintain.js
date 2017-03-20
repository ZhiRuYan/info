'use strict';

describe('Controller: MaintainCtrl', function () {

  // load the controller's module
  beforeEach(module('infoApp'));

  var MaintainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaintainCtrl = $controller('MaintainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
