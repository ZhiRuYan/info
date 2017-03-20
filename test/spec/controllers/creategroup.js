'use strict';

describe('Controller: CreategroupCtrl', function () {

  // load the controller's module
  beforeEach(module('infoApp'));

  var CreategroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreategroupCtrl = $controller('CreategroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
