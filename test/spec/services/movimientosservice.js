'use strict';

describe('Service: movimientosService', function () {

  // load the service's module
  beforeEach(module('sisInventarioApp'));

  // instantiate service
  var movimientosService;
  beforeEach(inject(function (_movimientosService_) {
    movimientosService = _movimientosService_;
  }));

  it('should do something', function () {
    expect(!!movimientosService).toBe(true);
  });

});
