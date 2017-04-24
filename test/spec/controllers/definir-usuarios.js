'use strict';

describe('Controller: DefinirUsuariosCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioApp'));

  var DefinirUsuariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DefinirUsuariosCtrl = $controller('DefinirUsuariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DefinirUsuariosCtrl.awesomeThings.length).toBe(3);
  });
});
