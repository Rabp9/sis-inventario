'use strict';

describe('Controller: ClavesEditCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var ClavesEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClavesEditCtrl = $controller('ClavesEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClavesEditCtrl.awesomeThings.length).toBe(3);
  });
});
