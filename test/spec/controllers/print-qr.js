'use strict';

describe('Controller: PrintQrCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var PrintQrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrintQrCtrl = $controller('PrintQrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrintQrCtrl.awesomeThings.length).toBe(3);
  });
});
