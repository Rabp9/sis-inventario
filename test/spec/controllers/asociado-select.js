'use strict';

describe('Controller: AsociadoSelectCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var AsociadoSelectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AsociadoSelectCtrl = $controller('AsociadoSelectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AsociadoSelectCtrl.awesomeThings.length).toBe(3);
  });
});
