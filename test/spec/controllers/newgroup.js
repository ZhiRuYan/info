'use strict';

describe('Controller: NewgroupCtrl', function () {

  // load the controller's module
  beforeEach(module('infoApp'));

  var NewgroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewgroupCtrl = $controller('NewgroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
