'use strict';

describe('Controller: BusquedaCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioApp'));

  var BusquedaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusquedaCtrl = $controller('BusquedaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BusquedaCtrl.awesomeThings.length).toBe(3);
  });
});
