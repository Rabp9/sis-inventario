'use strict';

describe('Service: areaActivasService', function () {

  // load the service's module
  beforeEach(module('sisInventarioApp'));

  // instantiate service
  var areaActivasService;
  beforeEach(inject(function (_areaActivasService_) {
    areaActivasService = _areaActivasService_;
  }));

  it('should do something', function () {
    expect(!!areaActivasService).toBe(true);
  });

});
