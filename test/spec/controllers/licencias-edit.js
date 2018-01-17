'use strict';

describe('Controller: LicenciasEditCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var LicenciasEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LicenciasEditCtrl = $controller('LicenciasEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LicenciasEditCtrl.awesomeThings.length).toBe(3);
  });
});
