'use strict';

describe('Controller: BienesAsignarCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var BienesAsignarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BienesAsignarCtrl = $controller('BienesAsignarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BienesAsignarCtrl.awesomeThings.length).toBe(3);
  });
});
