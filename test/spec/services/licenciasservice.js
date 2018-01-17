'use strict';

describe('Service: LicenciasService', function () {

  // load the service's module
  beforeEach(module('sisInventarioFrontendApp'));

  // instantiate service
  var LicenciasService;
  beforeEach(inject(function (_LicenciasService_) {
    LicenciasService = _LicenciasService_;
  }));

  it('should do something', function () {
    expect(!!LicenciasService).toBe(true);
  });

});
