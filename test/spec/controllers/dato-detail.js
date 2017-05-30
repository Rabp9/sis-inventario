'use strict';

describe('Controller: DatoDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var DatoDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatoDetailCtrl = $controller('DatoDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatoDetailCtrl.awesomeThings.length).toBe(3);
  });
});
