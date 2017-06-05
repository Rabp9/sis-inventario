'use strict';

describe('Service: datosService', function () {

  // load the service's module
  beforeEach(module('sisInventarioFrontendApp'));

  // instantiate service
  var datosService;
  beforeEach(inject(function (_datosService_) {
    datosService = _datosService_;
  }));

  it('should do something', function () {
    expect(!!datosService).toBe(true);
  });

});
