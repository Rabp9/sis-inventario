'use strict';

describe('Controller: RegistrarLoteCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioApp'));

  var RegistrarLoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrarLoteCtrl = $controller('RegistrarLoteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrarLoteCtrl.awesomeThings.length).toBe(3);
  });
});
