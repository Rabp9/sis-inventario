'use strict';

describe('Service: clavesService', function () {

  // load the service's module
  beforeEach(module('sisInventarioApp'));

  // instantiate service
  var clavesService;
  beforeEach(inject(function (_clavesService_) {
    clavesService = _clavesService_;
  }));

  it('should do something', function () {
    expect(!!clavesService).toBe(true);
  });

});
