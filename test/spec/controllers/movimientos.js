'use strict';

describe('Controller: MovimientosCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var MovimientosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovimientosCtrl = $controller('MovimientosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovimientosCtrl.awesomeThings.length).toBe(3);
  });
});
