'use strict';

describe('Controller: ClavesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var ClavesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClavesAddCtrl = $controller('ClavesAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClavesAddCtrl.awesomeThings.length).toBe(3);
  });
});
