'use strict';

describe('Controller: FillinCtrl', function () {

  // load the controller's module
  beforeEach(module('infoApp'));

  var FillinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FillinCtrl = $controller('FillinCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
