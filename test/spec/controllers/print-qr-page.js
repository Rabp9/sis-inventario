'use strict';

describe('Controller: PrintQrPageCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var PrintQrPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrintQrPageCtrl = $controller('PrintQrPageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrintQrPageCtrl.awesomeThings.length).toBe(3);
  });
});
