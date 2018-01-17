'use strict';

describe('Controller: LicenciasCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var LicenciasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LicenciasCtrl = $controller('LicenciasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LicenciasCtrl.awesomeThings.length).toBe(3);
  });
});
