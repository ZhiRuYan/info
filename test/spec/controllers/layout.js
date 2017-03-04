'use strict';

describe('Controller: LayoutCtrl', function () {

  // load the controller's module
  beforeEach(module('infoApp'));

  var LayoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LayoutCtrl = $controller('LayoutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LayoutCtrl.awesomeThings.length).toBe(3);
  });
});
