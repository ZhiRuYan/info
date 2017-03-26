'use strict';

describe('Controller: GrouplistCtrl', function () {

  // load the controller's module
  beforeEach(module('infoApp'));

  var GrouplistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GrouplistCtrl = $controller('GrouplistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
