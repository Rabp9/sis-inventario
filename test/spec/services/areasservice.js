'use strict';

describe('Service: AreasService', function () {

  // load the service's module
  beforeEach(module('sisInventarioFrontendApp'));

  // instantiate service
  var AreasService;
  beforeEach(inject(function (_AreasService_) {
    AreasService = _AreasService_;
  }));

  it('should do something', function () {
    expect(!!AreasService).toBe(true);
  });

});
