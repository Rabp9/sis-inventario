'use strict';

describe('Service: usuarioActivosService', function () {

  // load the service's module
  beforeEach(module('sisInventarioApp'));

  // instantiate service
  var usuarioActivosService;
  beforeEach(inject(function (_usuarioActivosService_) {
    usuarioActivosService = _usuarioActivosService_;
  }));

  it('should do something', function () {
    expect(!!usuarioActivosService).toBe(true);
  });

});
