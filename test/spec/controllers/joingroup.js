'use strict';

describe('Controller: JoingroupCtrl', function () {

  // load the controller's module
  beforeEach(module('infoApp'));

  var JoingroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JoingroupCtrl = $controller('JoingroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
