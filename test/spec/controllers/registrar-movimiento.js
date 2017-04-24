'use strict';

describe('Controller: RegistrarMovimientoCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioApp'));

  var RegistrarMovimientoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrarMovimientoCtrl = $controller('RegistrarMovimientoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrarMovimientoCtrl.awesomeThings.length).toBe(3);
  });
});
