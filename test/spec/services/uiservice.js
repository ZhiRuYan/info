'use strict';

describe('Service: uiService', function () {

  // load the service's module
  beforeEach(module('infoApp'));

  // instantiate service
  var uiService;
  beforeEach(inject(function (_uiService_) {
    uiService = _uiService_;
  }));

  it('should do something', function () {
    expect(!!uiService).toBe(true);
  });

});
