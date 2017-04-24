'use strict';

describe('Controller: MarcasAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var MarcasAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarcasAddCtrl = $controller('MarcasAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarcasAddCtrl.awesomeThings.length).toBe(3);
  });
});
