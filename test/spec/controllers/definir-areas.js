'use strict';

describe('Controller: DefinirAreasCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioApp'));

  var DefinirAreasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DefinirAreasCtrl = $controller('DefinirAreasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DefinirAreasCtrl.awesomeThings.length).toBe(3);
  });
});
