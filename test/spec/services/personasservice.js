'use strict';

describe('Service: PersonasService', function () {

  // load the service's module
  beforeEach(module('sisInventarioFrontendApp'));

  // instantiate service
  var PersonasService;
  beforeEach(inject(function (_PersonasService_) {
    PersonasService = _PersonasService_;
  }));

  it('should do something', function () {
    expect(!!PersonasService).toBe(true);
  });

});
