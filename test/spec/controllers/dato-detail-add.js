'use strict';

describe('Controller: DatoDetailAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var DatoDetailAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatoDetailAddCtrl = $controller('DatoDetailAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatoDetailAddCtrl.awesomeThings.length).toBe(3);
  });
});
