'use strict';

describe('Controller: BienesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var BienesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BienesAddCtrl = $controller('BienesAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BienesAddCtrl.awesomeThings.length).toBe(3);
  });
});
